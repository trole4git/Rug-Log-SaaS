import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  // Do not put this client in a global variable — always create a new one per request.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value)
          )
        },
      },
    }
  )

  // Do not run code between createServerClient and getClaims().
  // IMPORTANT: getClaims() keeps sessions alive on server-rendered pages.
  await supabase.auth.getClaims()

  // This is a public landing page app — no auth-gating here.
  // Add route protection (e.g., redirect to /login for /dashboard) when needed.

  // IMPORTANT: return supabaseResponse as-is. If you create a new NextResponse,
  // copy its cookies or users may be randomly logged out.
  return supabaseResponse
}
