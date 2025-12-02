'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterTeacher() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async () => {
    if (!email || !password || !name) return alert('Fill all fields')
    setLoading(true)

    // Sign up in Supabase Auth
    const { data: user, error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) return alert(signUpError.message)

    // Insert into teachers table
    const { error: insertError } = await supabase.from('teachers').insert({
      id: user.user.id,
      name,
      email: user.user.email
    })
    if (insertError) return alert(insertError.message)

    alert('Teacher account created! You can now login.')
    setLoading(false)
    setEmail(''); setPassword(''); setName('')
  }

  return (
    <div>
      <h3>Teacher Sign Up</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignUp} disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
    </div>
  )
}
