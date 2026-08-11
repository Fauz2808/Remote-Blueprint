export type LeadTool = 'readiness' | 'job-fit'

export type LeadPayload = {
  email: string
  tool: LeadTool
  newsletterConsent: boolean
}

export function normalizeLeadEmail(value: string) {
  const email = value.trim().toLowerCase()
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254) throw new Error('Email tidak valid')
  return email
}

export function createLeadPayload(email: string, tool: LeadTool, newsletterConsent: boolean): LeadPayload {
  return { email: normalizeLeadEmail(email), tool, newsletterConsent }
}

export async function submitLead(payload: LeadPayload) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Email belum dapat disimpan. Coba lagi.')
}
