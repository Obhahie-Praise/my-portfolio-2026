import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-[50px] font-mono text-[20px] tracking-[4%]'>
        <Image src={"/logo.svg"} alt='Portfolio logo' height={24.3} width={238} />
        <Link href={"/#"}>PROJECTS</Link>
        <Link href={"/#"}>FEATS</Link>
        <Link href={"/#"}>THOUGHTS</Link>
        <Link href={"/#"}>REACHOUT</Link>
        <div className="flex items-center gap-[8px] text-[15px]">
            <Image src={"/sun-line.svg"} alt='theme toggle' height={18} width={18} />
            <p className="">Light</p>
        </div>
        
    </div>
  )
}

export default Navbar