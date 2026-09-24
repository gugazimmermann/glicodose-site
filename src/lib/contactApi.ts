import { supabase } from './supabase'

export type ContactPayload = {
  name: string
  email: string
  message: string
  /** Honeypot — leave empty; bots that fill it are ignored server-side. */
  website?: string
}

export async function sendContactMessage(
  payload: ContactPayload,
): Promise<void> {
  const { data, error } = await supabase.functions.invoke('send-contact', {
    body: {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      website: payload.website ?? '',
    },
  })

  if (error) throw error

  const apiError = (data as { error?: string } | null)?.error
  if (apiError) throw new Error(apiError)
}
