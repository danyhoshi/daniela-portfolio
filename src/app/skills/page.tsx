import type { Metadata } from 'next'
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
    <main className="min-h-screen">
      <p>skills</p>
    </main>
  )
}