import type { Metadata } from 'next'
import Projects from '../ui/components/Projects'
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
export default function petProjects() {
  return (
    <Projects />
  )
}