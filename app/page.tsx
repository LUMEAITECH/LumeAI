'use client'
import HeroInteracting from "@/components/hero-interactin";
import SnapScroll from "@/components/snap-scroll";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <HeroInteracting className="absolute inset-0 pointer-events-auto w-full h-full -z-10" />
      {
        !isOpen ?
          <div className='z-10 absolute w-screen h-screen bg-black/50 flex items-center justify-center'>
            <button
              className='z-20 absolute w-fit h-fit p-2 rounded-xl shadow-xl bg-gradient-to-r from-gray-200 to-white text-black flex items-center justify-center hover:scale-105 transition-all duration-300'
              onClick={() => setIsOpen(true)}
            >
              Get Started
            </button>
          </div>
          :
          <SnapScroll />
      }
      {/* <BackgroundGradientAnimation/> */}
    </>
  )
}

