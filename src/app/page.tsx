import Feats from '@/sections/Feats'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import Projects from '@/sections/Projects'
import Reachout from '@/sections/Reachout'
import Thoughts from '@/sections/Thoughts'
import React from 'react'

const page = () => {
  return (
    <div className='px-[50px]'>
      <Navbar />
      <Hero />
      <Projects />
      <Feats />
      <Thoughts />
      <Reachout />
      <Footer />
    </div>
  )
}

export default page