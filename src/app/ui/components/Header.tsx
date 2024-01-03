'use client'
import { anton, inter, inconsolata } from '@/app/ui/fonts';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
    const [menu, setMenu] = useState(false)
    const handleClick = () => {
     
        setMenu(prevState => !prevState)
    }
    return (
        <header className="flex justify-center items-center fixed h-[4rem] w-full bg-[#1b1a17] z-[999]">
            <div className={`flex justify-between w-full lg:max-w-[1000px] md:justify-center md:items-center md:flex-col lg:justify-between lg:flex-row`}>
                <div className={`text-[2.2rem] ${anton.className} pl-4 lg:basis-60 md:pl-0`}>
                    <span className={`${inter.className} text-[#ff8303] font-semibold`}>&lt;/</span><span className={`${anton.className} text-[#ff8303]`}>D</span>aniela<span className={`${inter.className} text-[#ff8303] font-bold`}>&gt;</span>
                </div>
                
                <button aria-label="burgermenu" type="button" className="menu-btn block lg:hidden md:hidden pr-4 z-[999]" onClick={ handleClick }>
                    <div className={ clsx(``,
                            {
                                'block': !menu,
                                'hidden': menu   
                                
                            }) }>
                            <svg className="fill-[#f0e3ca]" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M5.25 37.25V32.7h37.5v4.55Zm0-10.95v-4.55h37.5v4.55Zm0-11v-4.6h37.5v4.6Z"/></svg>
                    </div>
                    <div className={clsx(``,
                            {
                                'block': menu,
                                'hidden': !menu 
                            })}>
                        <svg className="fill-[#f0e3ca]" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.45 38.7 9.3 35.55 20.85 24 9.3 12.5l3.15-3.2L24 20.8 35.55 9.3l3.15 3.2L27.2 24l11.5 11.55-3.15 3.15L24 27.2Z"/></svg>
                    </div>
                </button>
                <ul className={clsx(`flex flex-col lg:flex-row justify-center items-center lg:justify-end fixed w-full lg:relative gap-4 text-[1.2rem] ${inconsolata.className} font-bold mt-[4rem] pt-8 md:mt-0 lg:mt-0 pb-[1rem] lg:pt-[1em]  bg-[#000000dd] lg:bg-transparent md:bg-transparent md:justify-evenly md:pt-[6rem]`,
                {
                    'block': menu,
                    'hidden': !menu,
                    'lg:flex': menu || !menu,
                    'lg:flex-row': menu || !menu,
                    'md:flex': menu || !menu,
                    'md:flex-row': menu || !menu,
                }
                )} onClick={handleClick}>
                    <Link href="/about-me"><li>About Me</li></Link>
                    <Link href="/skills"><li>Skills</li></Link>
                    <Link href="/pet-projects"><li>Pet-Projects</li></Link>
                    <Link href="/contacts"><li>Contacts</li></Link>
                </ul>     
            </div>
        </header>
    )
}
