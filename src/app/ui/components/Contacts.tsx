'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'          
import { formInfoSchema } from '@/app/validation/login'    
import { zodResolver } from '@hookform/resolvers/zod';
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
    <main className="pt-[7rem] flex flex-col justify-center items-center">
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
  )
}