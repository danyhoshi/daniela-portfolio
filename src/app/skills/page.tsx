import type { Metadata } from 'next'
import Skills from '../ui/components/Skills'
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
export default function skills() {
  return (
    <Skills />
  )
}