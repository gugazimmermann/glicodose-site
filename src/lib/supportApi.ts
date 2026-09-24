import { supabase } from './supabase'
import type { SupportPlanKey } from './supportProducts'

/** Prefer VITE_APP_URL when set; otherwise the current origin. */
export function resolveAppBaseUrl(
  envUrl: string | undefined,
  fallbackOrigin: string,
): string {
  if (envUrl) return envUrl.replace(/\/$/, '')
  return fallbackOrigin
}

export function appBaseUrl(): string {
  return resolveAppBaseUrl(
    import.meta.env.VITE_APP_URL as string | undefined,
    window.location.origin,
  )
}

export async function createPublicSupportCheckout(options: {
  plan: SupportPlanKey
  successUrl: string
  cancelUrl: string
}): Promise<string> {
  const { data, error } = await supabase.functions.invoke(
    'create-public-support-checkout',
    {
      body: {
        plan: options.plan,
        successUrl: options.successUrl,
        cancelUrl: options.cancelUrl,
      },
    },
  )

  if (error) throw error

  const url = (data as { url?: string; error?: string } | null)?.url
  const apiError = (data as { error?: string } | null)?.error
  if (apiError) throw new Error(apiError)
  if (!url) throw new Error('Não foi possível iniciar o checkout.')
  return url
}

export async function createPublicSupportPortal(options: {
  email: string
  returnUrl: string
}): Promise<string> {
  const { data, error } = await supabase.functions.invoke(
    'create-public-support-portal',
    {
      body: {
        email: options.email,
        returnUrl: options.returnUrl,
      },
    },
  )

  if (error) throw error

  const url = (data as { url?: string; error?: string } | null)?.url
  const apiError = (data as { error?: string } | null)?.error
  if (apiError) throw new Error(apiError)
  if (!url) throw new Error('Não foi possível abrir o portal de assinatura.')
  return url
}
