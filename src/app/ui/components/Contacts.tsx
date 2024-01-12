'use client'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
 import { useForm } from 'react-hook-form'  
import { useForm as useFormSpree } from "@formspree/react";       
import { formInfoSchema } from '@/app/validation/Contacts'    
import { zodResolver } from '@hookform/resolvers/zod';
import { anton, inter, inconsolata } from '@/app/ui/fonts';
import { email, twitter, github, linkedin, close } from './assets';
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
type Inputs = {
  name: string,
  lastname: string,
  email: string,
  message: string
}

export default function Contacts() {
  const keyForm: string = process.env.NEXT_PUBLIC_KEY_FORM ?? ''
  const [formSpreeState, sendToFormSpree] = useFormSpree(keyForm);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Inputs>({
      defaultValues: {
        name: '',
        lastname: '',
        email: '',
        message: ''
      },
      resolver: zodResolver(formInfoSchema)
  })
  
  const onSubmit = (data: Inputs) => {
   sendToFormSpree(data);   
   if(formSpreeState.succeeded)  reset()
 };
 
  return (
    <>
    <main className="pt-[8rem] md:pt-[10rem] flex flex-col justify-center items-center bg-[#1f1e1b]">
        <section className="flex flex-col justify-center items-center w-[90%] max-w-4xl bg-[#1f1e1b]">
        <h3 className={`${inconsolata.className} text-[2rem] text-[#ff8303] text-center font-bold`}>Get in touch</h3>
        <form className="form max-w-md" onSubmit={ handleSubmit(onSubmit) }>
           <div className="group__form">
              <label className="label__form">Name</label>
                <div className="group-input__form">         
                  <input type="text" className="input__form" id="name" title="The name must only have letters and spaces." placeholder="John" {...register('name')} disabled={isSubmitting}/>  
                                       
                </div>
                { errors.name?.message && <div className={`${inconsolata.className} text-[#e94c4c] drop-shadow`}>{ errors.name?.message }</div> }
            </div>                    
            <div className="group__form">
              <label  className="label__form">Last Name</label>
              <div className="group-input__form">
                <input type="text" className="input__form" id="lastname" title="The lastname must only have letters and spaces." placeholder="Doe" {...register('lastname')} disabled={isSubmitting}/>

              </div>
              { errors.lastname?.message && <div className={`${inconsolata.className} text-[#e94c4c]`}>{ errors.lastname?.message }</div> }
            </div>
            <div className="group__form">
              <label className="label__form">Email</label>
                <div className="group-input__form">
                    <input type="email" className="input__form" id="email" placeholder="johndoe@email.com" {...register('email')} disabled={isSubmitting}/>
                    
                </div>
                { errors.email?.message && <div className={`${inconsolata.className} text-[#e94c4c] drop-shadow`}>{ errors.email?.message }</div> }
            </div>        
            <div className="group__form">
              <label className="label__form">Message</label>
              <div className="group-input__form">
                <textarea data-pattern="^.{1,500}$" title="Please, insert max 500 characters." id="message" placeholder="Let's talk about projects..." {...register('message')} disabled={isSubmitting}></textarea>
              </div>
              { errors.message?.message && <div className={`${inconsolata.className} text-[#e94c4c] drop-shadow`}>{ errors.message?.message }</div> }
            </div>        
    
            <div className="group__form-btn-form">
              <button type="submit" className="btn__form gradient-hover-effect" disabled={isSubmitting}>Submit</button>
            </div> 
            {formSpreeState.submitting && (
            <Transition
              as={Fragment}
              show={formSpreeState.submitting}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-[#1b1a17] bg-opacity-90">              
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#f0e3ca]"></div>
            <p className={`mt-10 text-xl text-accent font-bold text-[#ff8303] ${inconsolata.className}`}>SENDING...          </p>
            </div>
          </Transition>
      )}

      {formSpreeState.errors && (
        <Transition
          as={Fragment}
          show={formSpreeState.errors.getFormErrors().length > 0}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-[#1b1a17] bg-opacity-90">
              <Image width='48' 
                      height='48' 
                      alt='close-icon' 
                      src={ close } 
                    />  
            <p className={`mt-10 text-xl text-accent font-bold ${inconsolata.className} text-[#ff8303]`}>I apologize for the inconvenience, something went wrong.</p>
            <p className={`text-lg ${inconsolata.className} text-[#ff8303]`}>Please try again in a few minutes.</p>
          </div>
        </Transition> 
      )}
          {formSpreeState.succeeded && (
            <Transition
              as={Fragment}
              show={formSpreeState.succeeded}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-[#1b1a17]">
              <p className={`mt-10 text-xl text-accent font-bold ${inconsolata.className} text-[#ff8303]`}>MESSAGE SENT!</p>
              <Link href="/">
                <button className={`rounded-lg bg-[#ff830383] px-6 py-2 font-bold uppercase text-[#f0e3ca] hover:bg-[#ff830383] ${inconsolata.className}`}>RETURN HOME</button>
              </Link>
              </div>
            </Transition>
          )}
        </form>
        </section>
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