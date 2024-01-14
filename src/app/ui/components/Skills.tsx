'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import { html5, css, js, ts, git, react, nextjs, jest, tw, boots, sc } from './assets';
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
export default function Skills() {
  return (
    <main className="pt-[7rem] flex flex-col justify-center items-center">
        <section className="my-skills md:flex-row max-w-4xl md:pt-6 md:pl-3 md:pr-3">
          <div className={`skill text-[0.7rem] ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="114"
              height="129"
              alt="html5"
              src={ html5 }
              className="html5 h-[80%] w-auto md:w-[70%] md:h-auto"
            />    
            <p className='text-[1.7rem]'>HTML5</p>
         </div>
         <div className={`skill md:flex-col ${inconsolata.className} md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="114"
              height="129"
              alt="css"
              src={ css }
              className="css h-[80%] w-auto md:w-[70%] md:h-auto"
            />  
            <p className='text-[1.7rem]'>CSS3</p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="js"
              src={ js }
              className="js h-[80%] w-auto md:w-[70%] md:h-auto"
            />  
            <p className='text-[1.7rem]'>JavaScript</p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="ts"
              src={ ts }
              className="ts h-[80%] w-auto md:w-[70%] md:h-auto"
            /> 
           <p className='text-[1.7rem]'>TypeScript</p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="129"
              height="128"
              alt="git"
              src={ git }
              className="git h-[80%] w-auto md:w-[70%] md:h-auto"
            /> 
            <p className='text-[1.7rem]'>Git</p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="800"
              height="800"
              alt="react"
              src={ react }
              className="react h-[80%] w-auto md:w-[70%] md:h-auto"
            />               
            <p className='text-[1.7rem]'>React</p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="nextjs"
              src={ nextjs }
              className="nextjs h-[80%] w-auto md:w-[70%] md:h-auto"
            /> 
            <p className='text-[1.7rem]'>NEXT.<span className='text-[1rem] '>JS</span></p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="jest"
              src={ jest }
              className="jest h-[80%] w-auto md:w-[70%] md:h-auto"
            /> 
           <p className='text-[1.5rem] text-center'>Jest</p>
          </div>   
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="tw"
              src={ tw }
              className="tw h-[80%] w-auto md:w-[70%] md:h-auto"
            /> 
            <p className='text-[1.7rem]'>Tailwind CSS</p>
          </div>
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="bootsrap"
              src={ boots }
              className="boots h-[80%] w-auto md:w-[70%] md:h-auto"
            /> 
            <p className='text-[1.7rem]'>Boostrap</p>
          </div>          
          <div className={`skill ${inconsolata.className} md:flex-col md:justify-center md:items-center md:w-[180px] md:h-[230px] md:gap-0 md:pl-0`}>
            <Image 
              width="128"
              height="128"
              alt="Styled Components"
              src={ sc }
              className="sc h-[100%] w-auto md:w-[70%] md:h-auto"
            /> 
            <p className='text-[1.5rem] text-center'>Styled Components</p>
          </div>    
        </section>
    </main>
  )
}