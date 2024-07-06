"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Navigation = () => {
    const router = useRouter();
  return (
    <nav className="w-full flex justify-between  py-4 h-[12vh] xl:px-20 md:px-14 px-8"><span onClick={() => router.push("/")} className=" cursor-pointer flex items-center justify-center gap-4 xl:ml-8 md:ml-4 ml-2">
    <img
      src="/assests/logo.png"
      className='xl:w-24 md:w-16 w-14'
      alt="Picture of the author"
    />
    
  </span>
  <span className="flex items-center justify-center gap-4">
        
        <a href="#features-section" className="btn_primary_2">Learn More</a>

        <button className="btn_primary_2" onClick={() => {
          router.push("/app")
        }}>Launch dApp</button>

      </span>
  </nav>
  )
}

export default Navigation