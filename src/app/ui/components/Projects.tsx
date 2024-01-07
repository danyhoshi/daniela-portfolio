'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import Image from 'next/image'
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
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
 const [viewModal, setViewModal]  = useState(false);
  const showModal = () => {
    setViewModal(prevState => !prevState)
    console.log("click")
  }
  return (
    <main className="mt-[8rem] lg:flex lg:justify-center">
      <section className='lg:flex-row lg:max-w-[1024px] works relative'>
      <div className="work-card z-[1]">
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
                    <button aria-label="See more" type="button" onClick={ showModal }>See more &rarr;</button> 
      </div>
      <div className={clsx(`flex flex-col justify-center items-center transition-opacity ${inconsolata.className} bg-[#00000077] w-screen h-screen fixed top-0 z-[999]`,
                            {
                                'opacity-100': viewModal,
                                'opacity-0': !viewModal,
                                'pointer-events-auto': viewModal,
                                'pointer-events-none': !viewModal    
                            })}>
          <div className={`bg-[#1b1a17] w-[90%] h-[700px] relative rounded-lg`}>
          <svg className={`absolute top-o right-0 fill-[#ff8303]`} onClick={ showModal } xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 96 960 960"><path d="m338 768 142-142 142 142 50-50-142-142 142-142-50-50-142 142-142-142-50 50 142 142-142 142 50 50Zm142.138 233q-88.138 0-165.625-33.084-77.488-33.083-135.417-91.012T88.084 741.625Q55 664.276 55 576.138 55 487 88.084 409.513q33.083-77.488 90.855-134.969 57.772-57.482 135.195-91.013Q391.557 150 479.779 150q89.221 0 166.827 33.454 77.605 33.453 135.012 90.802 57.407 57.349 90.895 134.877Q906 486.66 906 576q0 88.276-33.531 165.747-33.531 77.471-91.013 135.278-57.481 57.808-134.831 90.891Q569.276 1001 480.138 1001Z"/></svg>
              <div className={`flex flex-col justify-start items-center w-full h-full pt-4`}>
                <Image 
                  width="300"
                  height="300"
                  src="/Tenzies.webp"
                  alt='Tenzies'
                />
                <div className={`flex flex-col justify-center items-center pt-4`}>
                  <h4 className={`text-[1.7rem] text-[#ff8303] text-center font-black pt-1`}>Tenzies</h4>
                  <h5 className={`text-[1.2rem] text-center pt-5 pb-5`}>HTML5 - CSS - TypeScript - React</h5>
                  <div className="line2 text-center"></div>
                  <p className={`text-[1.2rem] text-center pt-5 w-[90%]`}>Let's play Tenzies! Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
                  <p className={`text-[1.2rem] text-[#ff8303] text-center font-black pt-5 drop-shadow`}><Link href="https://ornate-llama-98e056.netlify.app/" >Take a look</Link></p>
              </div>
              </div>
          </div>
          
      </div>
      {/* <div className={ clsx(`modal-container z-[999]`,
                            {
                                'opacity-100': viewModal,
                                'opacity-0': !viewModal,
                                'pointer-events-auto': viewModal   
                                
                            }) }>
        <div className="modal">
            <svg className={`z-[999]`} onClick={ showModal } xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 96 960 960"><path d="m338 768 142-142 142 142 50-50-142-142 142-142-50-50-142 142-142-142-50 50 142 142-142 142 50 50Zm142.138 233q-88.138 0-165.625-33.084-77.488-33.083-135.417-91.012T88.084 741.625Q55 664.276 55 576.138 55 487 88.084 409.513q33.083-77.488 90.855-134.969 57.772-57.482 135.195-91.013Q391.557 150 479.779 150q89.221 0 166.827 33.454 77.605 33.453 135.012 90.802 57.407 57.349 90.895 134.877Q906 486.66 906 576q0 88.276-33.531 165.747-33.531 77.471-91.013 135.278-57.481 57.808-134.831 90.891Q569.276 1001 480.138 1001Z"/></svg>
            <div className="container-project-m">
              <Image 
                width="300"
                height="300"
                src="/Tenzies.webp"
                alt='Tenzies'
              />
            </div>
            <div>
              <h4>Algo</h4>
              <h5>Algo más</h5>
              <div className="line2"></div>
              <p>yadayadayada</p>
              <a></a>
            </div>
        </div>
      </div> */}
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