import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import Footer from '@/components/footer'

const rajdhani = Rajdhani({
  weight: ['400', '500', '700'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: 'Portfolio made in NextJs and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" >
      <body className={`${rajdhani.className}`}>
        <div className='flex flex-col min-w-screen min-h-full justify-center'>
          <Header />
          <main className='bg-[#39393aff]'>
          {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
