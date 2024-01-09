import type { Metadata } from 'next'
import Contacts from '../ui/components/Contacts'
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
    <Contacts />
  )
}