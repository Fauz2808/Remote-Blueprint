import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && anonKey ? createClient(url, anonKey) : null
export const authConfigured = Boolean(supabase)

export async function sendMagicLink(email: string) {
  if (!supabase) throw new Error('Login belum dikonfigurasi.')
  const normalized = email.trim().toLowerCase()
  if (!/^\S+@\S+\.\S+$/.test(normalized)) throw new Error('Email tidak valid.')
  const { error } = await supabase.auth.signInWithOtp({
    email: normalized,
    options: { emailRedirectTo: `${window.location.origin}/app` },
  })
  if (error) throw error
}
