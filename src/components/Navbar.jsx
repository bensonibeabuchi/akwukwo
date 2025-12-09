'use client'
import Link from 'next/link'
import { supabase } from '../lib/supabaseClient'
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'
import { useTheme } from "next-themes"
import ThemeToggle from "../components/ThemeToggle"
import logo from '../../public/images/akwukwo.png'
import logoDark from '../../public/images/akwukwo2.png'
import Image from 'next/image';
import { CiSearch,  } from "react-icons/ci";
import UploadForm from '@/components/UploadForm'
import { FiPlus } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";




export default function Navbar(){
  const navRef = useRef(null);
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')
  const router = useRouter()
  const { theme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleUploaded = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    supabase.auth.getUser().then(r => setUser(r.data.user))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => sub?.subscription?.unsubscribe?.()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    router.push(`/search?query=${encodeURIComponent(search)}`)
    setSearch('')
  }

  return (

      <div className="bg-foreground text-background w-full z-50 fixed">
        <nav className=" p-2 lg:max-w-[1620px] md:w-full w-[300px] mx-auto" ref={navRef}>

          <div className="flex items-center justify-between gap-8">

            {/* Logo */}
            <div className="flex shrink-0 items-center space-x-4">
              <div className="flex items-center md:p-8">
                <div className="shrink-0 ml-4">
                  <Link href="/">
                    <Image
                      src={theme === "dark" ? logoDark : logo}
                      height={100}
                      width={200}
                      alt="Akwukwo logo"
                      className="cursor-pointer md:w-40 w-32"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Middle section: Search Bar */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-background text-foreground rounded-full px-4 py-4 w-full"
            >
              <input
                type="text"
                placeholder="Search courses..."
                className="bg-transparent outline-none flex-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="ml-2 text-sm font-semibold">
                <CiSearch size={24} />
              </button>
            </form>

            {/* Right section */}
            <div className='flex items-center shrink justify-end gap-6 w-full p-2'>

              {user ? (
                  <>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-background text-foreground font-semibold flex items-center px-4 py-2 rounded transition"
                  > <FiPlus size={16} strokeWidth={3} /> Upload 

                  </button>
                    {/* <Link href="/courses">Courses</Link> */}
                    <IoIosNotifications  size={32} className='text-background'/>
                    <FaUserCircle size={32} className='text-background'/>
                    

                  </>
                ) : (
                  <Link href="/auth/login">Login</Link>
                )}

              {/* <ThemeToggle /> */}
              <button onClick={signOut}>Sign Out</button>
            </div>

          </div>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex md:hidden items-center bg-background text-foreground rounded-full px-4 py-2 mt-4"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="ml-2 text-sm font-semibold">
              Go
            </button>
          </form>

        </nav>
              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs bg-opacity-50">
                  <div className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-lg">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                    >
                      &times;
                    </button>
                    <h2 className="text-xl font-bold mb-4">Upload Lesson</h2>
                    <UploadForm onUploaded={handleUploaded} />
                  </div>
                </div>
              )}
      </div>
 
  )
}
