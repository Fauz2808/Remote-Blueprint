import type { User } from '@supabase/supabase-js'
import { mergeProgress } from './progress'
import { supabase } from './supabase'

export async function loadCoreState(user: User, local: Record<string, boolean>) {
  if (!supabase) throw new Error('Supabase belum dikonfigurasi.')
  const [entitlement, remote] = await Promise.all([
    supabase.from('entitlements').select('active').eq('user_id', user.id).eq('tier', 'core').maybeSingle(),
    supabase.from('action_progress').select('action_id, completed').eq('user_id', user.id),
  ])
  if (entitlement.error) throw entitlement.error
  if (remote.error) throw remote.error
  const server = Object.fromEntries(remote.data.map((item) => [item.action_id, item.completed]))
  return { entitled: entitlement.data?.active === true, progress: mergeProgress(server, local) }
}

export async function saveCoreProgress(userId: string, progress: Record<string, boolean>) {
  if (!supabase) return
  const rows = Object.entries(progress).map(([action_id, completed]) => ({ user_id: userId, action_id, completed }))
  if (!rows.length) return
  const { error } = await supabase.from('action_progress').upsert(rows, { onConflict: 'user_id,action_id' })
  if (error) throw error
}

export async function clearCoreProgress(userId: string) {
  if (!supabase) return
  const { error } = await supabase.from('action_progress').delete().eq('user_id', userId)
  if (error) throw error
}
