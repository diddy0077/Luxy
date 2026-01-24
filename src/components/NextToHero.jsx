import React from 'react'
import carImage from '../assets/luxycar.jpg'

const NextToHero = () => {
  return (
    <section className=' flex flex-col items-center justify-center p-6 sm:p-20 ' style={{
        background: "#080C16",
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px)'
      }}>
      <div className="relative rounded-2xl overflow-hidden shadow-elevated card max-w-6xl mx-auto">
        <img src={carImage} alt="Luxury car transformation from garage to revenue-generating asset" className="w-full h-auto" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-background/90 circle flex items-center justify-center shadow-gold backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6 svg">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 px-4 py-1 sm:px-6 sm:py-3 mr-4 sm:mr-0 rounded-lg bg-[#1B2232CC] backdrop-blur-sm border border-border text-[#8A94A8]">
          <p className="text-sm ">Private Garage</p>
          <p className="text-xs ">Idle Asset</p>
        </div>
        <div className="absolute bottom-6 right-6 px-4 py-1 sm:px-6 sm:py-3 rounded-lg bg-[#D9A52033] backdrop-blur-sm border border-card text-[#D9A520]">
          <p className="text-sm text-gold">Premium Service</p>
          <p className="text-xs text-gold/60">Revenue Asset</p>
        </div>
      </div>
      <p className='text-gray-300 italic mt-6'>"From Garage to Revenue"</p>
      

    </section>
  )
}

export default NextToHero