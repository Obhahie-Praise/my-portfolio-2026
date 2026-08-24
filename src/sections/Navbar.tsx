import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-[50px] font-mono font-semibold text-[20px] tracking-[4%] px-[50px] '>
        <Image src={"/logo.svg"} alt='Portfolio logo' height={24.3} width={238} />
        <Link href={"/#"} className='cursor-link'>PROJECTS</Link>
        <Link href={"/#"} className='cursor-link'>FEATS</Link>
        <Link href={"/#"} className='cursor-link'>THOUGHTS</Link>
        <Link href={"/#"} className='cursor-link'>REACHOUT</Link>
        <div className="flex items-center gap-[8px] text-[15px] cursor-link">
            <Image src={"/sun-line.svg"} alt='theme toggle' height={18} width={18} />
            <p className="">Light</p>
        </div>
        
    </nav>
  )
}

export default Navbar