import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(url, anon, {
  auth: {
    // Persist session automatically in browser localStorage
    persistSession: true,
    // Optional: you can set autoRefreshToken true (default true)
    autoRefreshToken: true,
  },
})
