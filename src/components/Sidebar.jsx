"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiHome, FiBook, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import UploadForm from '@/components/UploadForm'


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleUploaded = (newLesson) => {
    setLessons([newLesson, ...lessons])
    setIsModalOpen(false)
  }
  
  
  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
    }

  return (
    <aside
      className={`h-screen bg-background border-r text-foreground p-4 flex flex-col transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header + Toggle */}
      <div className="flex items-center justify-between mb-10">


        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="p-2 rounded hover:bg-accent transition"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        <SidebarLink collapsed={collapsed} Icon={FiHome} label="Profile" href="/" />
        <SidebarLink collapsed={collapsed} Icon={FiBook} label="Courses" href="/" />
        <SidebarLink collapsed={collapsed} Icon={FiSettings} label="Settings" href="/" />
        
        
      {/* Upload Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition w-full mt-6
        ${collapsed ? "px-0" : "px-4"}`}
      >
        {collapsed ? "+" : "Upload Lesson"}
      </button>

      <button onClick={signOut} className="flex w-full items-center gap-4 justify-center cursor-pointer px-4 py-3 mt-4 rounded-md font-medium bg-red-500 hover:bg-red-600 text-white" ><FiLogOut /> Sign out</button>
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

    </aside>
  );
}


function SidebarLink({ collapsed, Icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition"
    >
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
