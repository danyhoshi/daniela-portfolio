'use client'
import type { Metadata } from 'next'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'          
import { formInfoSchema } from '@/app/validation/login'    
import { zodResolver } from '@hookform/resolvers/zod';
import { anton, inter, inconsolata } from '@/app/ui/fonts';
import { email, twitter, github, linkedin } from './assets';
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
export default function Contacts() {
  return (
    <>
    <main className="pt-[7rem] flex flex-col justify-center items-center bg-[#1f1e1b]">
        {/* <section className="my-skills md:flex-row max-w-4xl md:pt-6">
        <form action="https://formspree.io/f/xwkjnvdr" method="POST" className="form">
                    <div className="group__form">
                        <label className="label__form">Name</label>
                        <div className="group-input__form">         
                            <input type="text" className="input__form" name="name" id="name" title="The name must only have letters and spaces." pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" placeholder="John" required />                          
                        </div>
                    </div>                    
                    <div className="group__form">
                        <label  className="label__form">Last Name</label>
                        <div className="group-input__form">
                            <input type="text" className="input__form" name="lastname" id="lastname" title="The lastname must only have letters and spaces." pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="group__form">
                            <label className="label__form">Email</label>
                            <div className="group-input__form">
                                <input type="email" className="input__form" name="email" id="email" title="Please insert a valid email address." pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="johndoe@email.com" required />
                            </div>
                    </div>        
                    <div className="group__form">
                        <label className="label__form">Message</label>
                        <div className="group-input__form">
                            <textarea name="message" data-pattern="^.{1,500}$" title="Please, insert max 500 characters." placeholder="Let's talk about projects..." required></textarea>
                        </div>
                    </div>        
                   <div className="message__form">
                        <p><span className="material-symbols-outlined">warning</span><b>Error: </b>Please fill in the form correctly</p>
                    </div>        
                    <div className="group__form-btn-form">
                        <button type="submit" className="btn__form gradient-hover-effect">Submit</button>
                        <p className="submit-success__form">The form is sending... </p>
                        <div className="submit-success__form"><img src="./assets/puff.svg" alt="loader" /></div>
                    </div> 
                </form>
        </section> */}
    </main>
    <footer className={`footer ${inconsolata.className}`}>
        <div className={`flex flex-col justify-center items-center lg:flex-row w-full md:max-w-[800px]`}>
          <div className={`flex flex-col justify-center items-center`}>
            <div className={`text-[2.2rem] ${anton.className} pl-4 lg:self-start`}>
                <span className={`${inter.className} text-[#ff8303] font-semibold`}>&lt;/</span><span className={`${anton.className} text-[#ff8303]`}>D</span>aniela<span className={`${inter.className} text-[#ff8303] font-bold`}>&gt;</span>
              </div>
              <p className={`w-[80%] pt-4`}>If you liked my work and you need me, I'm ready to talk to you.</p>
          </div>
          <div className={`flex flex-col justify-center items-center gap-3 text-center pt-6 w-full md:w-[800px]`}>
            <h2 className={`text-[2.2rem] ${anton.className} text-[#ff8303] pl-4 lg:self-start`}>CONTACTS</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 text-[#ff8303]">
                <li className='flex flex-row items-center gap-2 pb-3'>
                  <Link href="mailto:1989.daniela@gmail.com" target="blank" rel="noopener" aria-label="email-link">
                  <Image 
                    width="40"
                    height="40"
                    alt="email"
                    src={ email }
                  />
                  </Link>
                  <Link href="mailto:1989.daniela@gmail.com" target="blank" rel="noopener">1989.daniela@gmail.com</Link>
                </li>            
                <li className='flex flex-row items-center gap-2 pb-3 md:pl-4'>
                  <Link href="https://twitter.com/Dany_hoshi" target="blank" rel="noopener" aria-label="twitter-link">
                    <Image 
                      width="40"
                      height="40"
                      alt="twitter"
                      src={ twitter }
                    />
                  </Link>
                  <Link href="https://twitter.com/Dany_hoshi" target="blank" rel="noopener">@dany_hoshi</Link>
                </li>

                <li className='flex flex-row items-center gap-2 pb-3'>
                  <Link href="https://github.com/danyhoshi" target="blank" rel="noopener" aria-label="github-link">
                  <Image 
                      width="40"
                      height="40"
                      alt="github"
                      src={ github }
                    />
                    </Link>
                  <Link href="https://github.com/danyhoshi" target="blank" rel="noopener">@danyhoshi</Link>
                </li>           
                <li className='flex flex-row items-center gap-2 pb-3 md:pl-4'>
                  <Link href="https://www.linkedin.com/in/daniela-gonz%C3%A1lez-ba16a556/" target="blank" rel="noopener" aria-label="linkedin-link">
                  <Image 
                      width="40"
                      height="40"
                      alt="linkedin"
                      src={ linkedin }
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/daniela-gonz%C3%A1lez-ba16a556/" target="blank" rel="noopener">Daniela González</Link>
                  </li>
            </ul>
          </div>
        </div>
    </footer>
    </>
  )
}