'use client'
import Link from 'next/link'
import { supabase } from '../lib/supabaseClient'
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'
import ThemeToggle from "../components/ThemeToggle"
import logo from '../../public/images/akwukwo.png'
import Image from 'next/image';



export default function Navbar(){
  const navRef = useRef(null);
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const u = supabase.auth.getUser().then(r=>setUser(r.data.user))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => sub?.subscription?.unsubscribe?.()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }


  return (
    <div>
      <div className="top-0 bg-foreground text-background w-full z-30 sticky">
        <nav className="py-6 lg:max-w-[1620px] md:w-full w-[300px] mx-auto" ref={navRef}>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center md:p-8">
                <div className='shrink-0 ml-4'>
                  <Link href="/">
                    <Image src={logo} height={100} width={200} alt="Akwukwo logo" className="cursor-pointer md:w-40 w-32" />
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-8'>
              {user ? (
                  <>
                    <Link href="/dashboard" className='bg-foreground text-background'>Dashboard</Link>
                    <Link href="/courses" className='bg-foreground text-background'>Courses</Link>
                    <button className='bg-foreground text-background' onClick={signOut}>Sign out</button>
                  </>
                ) : (
                  <Link href="/auth/login">Login</Link>
                )}
              <ThemeToggle />
            </div>

          </div>

        </nav>
    </div>

    </div>
  )
}
