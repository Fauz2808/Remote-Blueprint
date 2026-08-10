create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.purchases (
  id bigint generated always as identity primary key,
  ref_id text not null unique,
  message_id text not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  customer_email text not null,
  product_uuid text not null,
  listed_price integer not null check (listed_price >= 0),
  grand_total integer not null check (grand_total >= 0),
  currency text not null default 'IDR',
  status text not null check (status in ('paid', 'refunded')),
  purchased_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table public.entitlements (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  purchase_id bigint references public.purchases(id) on delete set null,
  tier text not null check (tier in ('core')),
  active boolean not null default true,
  activated_at timestamptz not null default now(),
  revoked_at timestamptz,
  unique (user_id, tier)
);

create table public.action_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  action_id text not null,
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, action_id)
);

create table public.saved_assessments (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null check (type in ('readiness', 'job_fit')),
  result_json jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.purchases enable row level security;
alter table public.entitlements enable row level security;
alter table public.action_progress enable row level security;
alter table public.saved_assessments enable row level security;

create policy "own profile" on public.profiles for select using (auth.uid() = id);
create policy "own purchases" on public.purchases for select using (auth.uid() = user_id);
create policy "own entitlements" on public.entitlements for select using (auth.uid() = user_id);
create policy "own progress read" on public.action_progress for select using (auth.uid() = user_id);
create policy "own progress write" on public.action_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own assessments" on public.saved_assessments for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, lower(new.email), new.raw_user_meta_data ->> 'name')
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.process_lynk_payment(
  p_email text, p_name text, p_ref_id text, p_message_id text,
  p_product_uuid text, p_tier text, p_listed_price integer,
  p_grand_total integer, p_purchased_at timestamptz
) returns void language plpgsql security definer set search_path = '' as $$
declare
  target_user uuid;
  target_purchase bigint;
begin
  select id into target_user from auth.users where lower(email) = lower(p_email) limit 1;
  if target_user is null then
    raise exception 'User must be created through Supabase Auth Admin before processing payment';
  end if;

  insert into public.purchases (ref_id, message_id, user_id, customer_email, product_uuid, listed_price, grand_total, status, purchased_at)
  values (p_ref_id, p_message_id, target_user, lower(p_email), p_product_uuid, p_listed_price, p_grand_total, 'paid', p_purchased_at)
  on conflict (ref_id) do update set message_id = excluded.message_id
  returning id into target_purchase;

  insert into public.entitlements (user_id, purchase_id, tier, active)
  values (target_user, target_purchase, p_tier, true)
  on conflict (user_id, tier) do update set active = true, purchase_id = excluded.purchase_id, revoked_at = null;
end;
$$;

revoke all on function public.process_lynk_payment(text,text,text,text,text,text,integer,integer,timestamptz) from public, anon, authenticated;
grant execute on function public.process_lynk_payment(text,text,text,text,text,text,integer,integer,timestamptz) to service_role;
