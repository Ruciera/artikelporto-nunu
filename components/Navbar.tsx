'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { RxGithubLogo } from 'react-icons/rx'


const mons = Montserrat({weight:["400","600"], subsets:["latin"]})

const Navbar = () => {

    const pathname = usePathname()
  
    const navi = [
        {
            ref: "WRITINGS",
            link: "/writings",
        },
        {
            ref:"ILLUSTRATIONS",
            link:"/illustrations",
        }
    ]

    return (
    <nav className='fixed w-screen flex bg-black h-14 prose-slate'>
        <div className={`flex w-full justify-between my-auto mx-2 md:mx-12 text-white  ${mons.className}`}>
            <h2 className='flex items-center gap-2'>
                <Image src="/mombw-svg.svg" objectFit='contain' width={38} height={38} loading='lazy' alt="Kanza eat something (black/white)"/> 
                <Link href="/">
                    <p className={`font-bold text-2xl md:text-3xl lg:text-4xl mt-2 hover:text-white/80 `}>Porto Nunu</p>
                </Link>
            </h2>
            <ul className='hidden lg:flex mt-4 gap-6'>
                {navi.map(nav =>(
                    <li key={nav.ref}>
                        <Link href={nav.link} className={`hover:text-orange-400/90 ${pathname === nav.link ? 'text-orange-400' : 'text-white'}`} >{nav.ref}</Link>
                    </li>
                ))}
                <li className='text-2xl hover:text-white/90'>
                    <Link href="https://github.com/Ruciera" target='_blank'>
                        <RxGithubLogo />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar