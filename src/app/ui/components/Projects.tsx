'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import Image from 'next/image'
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import projects from '@/app/lib/projects';
import { close } from './assets';
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
interface modal {
  view: boolean,
  id: number
} 
export default function Projects() {
 const [viewModal, setViewModal]  = useState<modal>({view: false, id: 0});
  const showModal = (idP: number) => {
    setViewModal({
      view: true,
      id: idP,
     })
  }
  const closeModal = () => {
    setViewModal(prevState => (
     {
      ...prevState,
      view: false,
     }

    ))
  }
  return (
    <main className="mt-[8rem] lg:flex lg:justify-center">
      <section className='lg:flex-row lg:max-w-[1024px] works relative'>
        {projects.map((p, index) => {
          return (
            <div key = {index} className="work-card z-[1]">
              <div className="container-project rounded-lg">
                  <Image 
                      width="300"
                      height="300"
                      src={p.img}
                      alt={p.title}
                      className='rounded-lg'
                  />
              </div>
              <div className={`work-info ${inconsolata.className}`}>
                  <h4 className={`text-[1.7rem] text-[#ff8303] font-black pt-1`}>{p.title}</h4>
                  <h5 className={`text-[1.2rem] text-center pt-5 w-[90%]`}>{p.tech}</h5>
              </div>
                  <button aria-label="See more" type="button" onClick={ () => showModal(p.id) }>See more &rarr;</button> 
            </div>                 
          )
        }) }
   
      <div className={clsx(`flex flex-col justify-center items-center transition-opacity ${inconsolata.className} bg-[#00000077] backdrop-blur w-screen h-screen fixed top-0 z-[900]`,
                            {
                                'opacity-100': viewModal.view,
                                'opacity-0': !viewModal.view,
                                'pointer-events-auto': viewModal.view,
                                'pointer-events-none': !viewModal.view    
                            })}>
          <div className={`bg-[#1b1a17] w-[90%] h-[670px] md:w-[90%] md:max-w-[900px] md:h-[380px] relative rounded-lg z-[901]`}>
              <Image width='48' 
                height='48' 
                alt='close-icon' 
                src={ close } 
                onClick={ closeModal } 
                className={`absolute top-o right-0 fill-[#ff8303] z-[999]`} />    
                <div className={`flex flex-col justify-start items-center md:flex-row md:justify-center w-full h-full pt-9 md:pt-1 overflow-y-scroll lg:overflow-y-hidden`}>
                <Image 
                  width="300"
                  height="300"
                  src={ projects[viewModal.id].img }
                  alt={ projects[viewModal.id].title  }
                  className='md:ml-4 rounded-lg'
                />
                <div className={`flex flex-col justify-center items-center pt-4`}>
                  <h4 className={`text-[1.7rem] text-[#ff8303] text-center font-black pt-3`}>{ projects[viewModal.id].title  }</h4>
                  <h5 className={`text-[1.2rem] text-center pt-5 pb-5 w-[90%]`}>{ projects[viewModal.id].tech  }</h5>
                  <div className="line2 text-center"></div>
                  <p className={`text-[1.2rem] text-center pt-5 w-[90%]`}>{ projects[viewModal.id].description  }</p>
                  <p className={`text-[1.2rem] text-[#ff8303] text-center font-black pt-2 md:pt-5 pb-2 drop-shadow`}><Link href= { projects[viewModal.id].link  }  >Take a look</Link></p>
              </div>
              </div>
          </div>  
          <div className='absolute w-full h-full z-[900]' onClick={ closeModal }>
          </div>       
      </div>
      </section>
    </main>
  )
}