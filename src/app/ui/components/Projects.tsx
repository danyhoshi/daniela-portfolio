'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import Image from 'next/image'
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import projects from '@/app/lib/projects';
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
    console.log("click: ", idP)
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
              <div className="container-project">
                  <Image 
                      width="300"
                      height="300"
                      src={p.img}
                      alt={p.title}
                  />
              </div>
              <div className={`work-info ${inconsolata.className}`}>
                  <h4 className={`text-[1.7rem] text-[#ff8303] font-black pt-1`}>{p.title}</h4>
                  <h5 className={`text-[1.2rem] text-center pt-5`}>{p.tech}</h5>
              </div>
                  <button aria-label="See more" type="button" onClick={ () => showModal(p.id) }>See more &rarr;</button> 
            </div>                 
          )
        }) }
   
      <div className={clsx(`flex flex-col justify-center items-center transition-opacity ${inconsolata.className} bg-[#00000077] w-screen h-screen fixed top-0 z-[900]`,
                            {
                                'opacity-100': viewModal.view,
                                'opacity-0': !viewModal.view,
                                'pointer-events-auto': viewModal.view,
                                'pointer-events-none': !viewModal.view    
                            })}>
          <div className={`bg-[#1b1a17] w-[90%] h-[670px] md:w-[90%] md:max-w-[900px] md:h-[360px] relative rounded-lg overflow-y-scroll md:overflow-y-hidden`}>
          <svg onClick={ closeModal } className={`absolute top-o right-0 fill-[#ff8303] z-[999]`} xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 96 960 960"><path d="m338 768 142-142 142 142 50-50-142-142 142-142-50-50-142 142-142-142-50 50 142 142-142 142 50 50Zm142.138 233q-88.138 0-165.625-33.084-77.488-33.083-135.417-91.012T88.084 741.625Q55 664.276 55 576.138 55 487 88.084 409.513q33.083-77.488 90.855-134.969 57.772-57.482 135.195-91.013Q391.557 150 479.779 150q89.221 0 166.827 33.454 77.605 33.453 135.012 90.802 57.407 57.349 90.895 134.877Q906 486.66 906 576q0 88.276-33.531 165.747-33.531 77.471-91.013 135.278-57.481 57.808-134.831 90.891Q569.276 1001 480.138 1001Z"/></svg>
            
                <div className={`flex flex-col justify-start items-center md:flex-row md:justify-center w-full h-full pt-9 md:pt-0`}>
                <Image 
                  width="300"
                  height="300"
                  src={ projects[viewModal.id].img }
                  alt={ projects[viewModal.id].title  }
                  className='md:pl-4'
                />
                <div className={`flex flex-col justify-center items-center pt-4`}>
                  <h4 className={`text-[1.7rem] text-[#ff8303] text-center font-black pt-1`}>{ projects[viewModal.id].title  }</h4>
                  <h5 className={`text-[1.2rem] text-center pt-5 pb-5 w-[90%]`}>{ projects[viewModal.id].tech  }</h5>
                  <div className="line2 text-center"></div>
                  <p className={`text-[1.2rem] text-center pt-5 w-[90%]`}>{ projects[viewModal.id].description  }</p>
                  <p className={`text-[1.2rem] text-[#ff8303] text-center font-black pt-2 md:pt-5 drop-shadow`}><Link href= { projects[viewModal.id].link  }  >Take a look</Link></p>
              </div>
              </div>
          </div>         
      </div>
      </section>
    </main>
  )
}