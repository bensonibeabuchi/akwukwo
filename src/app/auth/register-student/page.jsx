'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterStudent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async () => {
    if (!email || !password || !name) return alert('Fill all fields')
    setLoading(true)

    const { data: user, error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) return alert(signUpError.message)

    const { error: insertError } = await supabase.from('students').insert({
      id: user.user.id,
      name
    })
    if (insertError) return alert(insertError.message)

    alert('Student account created! You can now login.')
    setLoading(false)
    setEmail(''); setPassword(''); setName('')
  }

  return (
    <div>
      <h3>Student Sign Up</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignUp} disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
    </div>
  )
}
