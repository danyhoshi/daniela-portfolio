'use client'
import type { Metadata } from 'next'
import { inconsolata } from '@/app/ui/fonts';
import Image from 'next/image'
import { saveAs } from "file-saver"
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
export default function HomePage() {
  const saveFile = () => {
    saveAs(
      "./Resume.pdf",
      "Resume-Daniela.pdf"
    );
  };
  const code = `let button_menu = document.querySelector(".header_button"); 
  let float_menu = document.querySelector(".header_menu--float");  
  let line_top = document.querySelector(".header_button_line--top"); 
  let line_under = document.querySelector(".header_button_line--bottom");
  button_menu.isSelected = false;
  ${'\u00A0'}addEffectWriting(element, time) { let element_array = element.innerText.split("");   
  ${'\u00A0 \u00A0'}element.count = 0;  
  ${'\u00A0 \u00A0'} element.innerText = ""; 
  ${'\u00A0'} function writeSymbols() { element.innerText += element_array[element.count];  
    ${'\u00A0'}element.count++;    
    ${'\u00A0'}if (element.count &lt;= element_array.length) { setTimeout(() => { writeSymbols(); 
      ${'\u00A0'} }, time); } 
      ${'\u00A0'} else if (element.count >= element_array.length) { element.count = 0; 
        ${'\u00A0'} element.innerText = ""; 
        ${'\u00A0'} writeSymbols(); \n } } writeSymbols(); 
      } ...`;
  return (
    <main className="min-h-screen mt-[5rem]">
      <section className='container-headline lg:flex-row'>
        <div className={`presentation-container ${inconsolata.className} lg:max-w-[40%]`}> 
          <h1 className={`font-black text-[#ff8303] text-[2rem]`}>Daniela González</h1>
          <h2 className={`font-bold text-[1.5rem]`}>Frontend Developer</h2>
          <p className='text-[1.2rem] lg:max-w-[510px]'>I am a Computer Scientist and a Frontend Developer, I like to learn new things and practice them!</p>
          <button className='btn-cv pointer font-black text-[1.2rem] lg:max-w-[50%]' onClick={ saveFile }>
            Get Resume
          </button>
        </div>
        <div className='container-profile lg:max-w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <p className={`text-[1rem] multiline ${inconsolata.className} max-h overflow-hidden lg:max-w-[510px]`}>{ code }</p>
            <Image 
              width="300" 
              height="302" 
              src="/profile.webp" 
              alt="profile"
              className='absolute top-0 left-0 right-0 bottom-0 m-auto'
              />
        </div>
      </section>
    
    </main>
  )
}