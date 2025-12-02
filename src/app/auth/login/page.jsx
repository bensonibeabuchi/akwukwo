'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return alert(error.message)

    alert('Logged in! ID: ' + user.user.id)

    setLoading(false)
  }

  return (
    <div>
      <div>
        <h3>Login</h3>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </div>
      <div>
        <Link href="/auth/signup">Sign Up</Link>
      </div>
    </div>
  )
}
