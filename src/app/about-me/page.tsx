import type { Metadata } from 'next'
import AboutMe from '../ui/components/AboutMe'
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
export default function aboutMe() {
  return (
    <AboutMe />
  )
}