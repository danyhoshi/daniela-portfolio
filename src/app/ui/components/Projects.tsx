'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Daniela Portfolio',
  description: 'Frontend developer Portfolio',
  icons: {
    icon: [
      {
        url: './profile.webp',
        href: './profile.webp',
      }
    ]
  }
}
export default function Projects() {

  
  return (
    <main className="mt-[8rem] lg:flex lg:justify-center">
      <section className='lg:flex-row lg:max-w-[1024px] works'>
      <div className="work-card">
                <div className="container-project">
                    <Image 
                        width="300"
                        height="300"
                        src="/Tenzies.webp"
                        alt='Tenzies'
                    />
                </div>
                <div className={`work-info ${inconsolata.className}`}>
                    <h4 className={`text-[1.7rem] text-[#ff8303] font-black pt-1`}>Tenzies</h4>
                    <h5 className={`text-[1.2rem] text-center pt-5`}>HTML5 - CSS - TypeScript - React</h5>
                </div>
                    <button aria-label="See more" type="button">See more &rarr;</button> 
        </div>
        <div className="work-card">
                <div className="container-project">
                    <Image 
                        width="300"
                        height="300"
                        src="/spaceTravelers.webp"
                        alt='Space Travelers'
                    />
                </div>
                <div className={`work-info ${inconsolata.className}`}>
                    <h4 className={`text-[1.7rem] text-[#ff8303] font-black pt-1`}>Space Travelers</h4>
                    <h5 className={`text-[1.2rem] text-center pt-5`}>HTML5 - CSS - TypeScript - React - Redux - Vitest</h5>
                </div>
                    <button aria-label="See more" type="button">See more &rarr;</button> 
        </div>

        <div className="work-card">
                <div className="container-project">
                    <Image 
                        width="300"
                        height="300"
                        src="/covid.webp"
                        alt='Covid Metrics'
                    />
                </div>
                <div className={`work-info ${inconsolata.className}`}>
                    <h4 className={`text-[1.7rem] text-[#ff8303] font-black pt-1`}>Covid Metrics</h4>
                    <h5 className={`text-[1.2rem] text-center pt-5`}>HTML5 - CSS - TypeScript - React - Redux - Jest</h5>
                </div>
                    <button aria-label="See more" type="button">See more &rarr;</button> 
        </div>
        <div className="work-card">
                <div className="container-project">
                    <Image 
                        width="300"
                        height="300"
                        src="/mobileSecure.webp"
                        alt='Mobile Secure'
                    />
                </div>
                <div className={`work-info ${inconsolata.className}`}>
                    <h4 className={`text-[1.7rem] text-[#ff8303] font-black pt-1`}>Mobile Secure</h4>
                    <h5 className={`text-[1.2rem] text-center pt-5`}>HTML5 – CSS - TypeScript - React - Redux - NEXT.JS - Tailwind CSS</h5>
                </div>
                    <button aria-label="See more" type="button">See more &rarr;</button> 
        </div>
      </section>
    </main>
  )
}