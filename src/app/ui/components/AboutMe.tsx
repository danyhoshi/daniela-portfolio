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
export default function AboutMe() {
  return (
    <main className="bg-[#1f1e1b] flex flex-col justify-center items-center">
      <section className={`about-me ${inconsolata.className} text-[1.2rem] md:flex-row md:w-[700px] md:pt-0`}>
           <Image 
                width="100" 
                height="100" 
                src="/Logo.webp" 
                alt="logo"/>
            <p className='w-[80%]'>A few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. Now I am developing websites and web applications to order or for myself.</p>
        </section>
    
    </main>
  )
}