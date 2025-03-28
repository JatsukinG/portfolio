import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import './globals.css'
import MainNavbar from '@/layouts/main/navbar'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Julian Trujillo',
  description: 'Portfolio web by Julian Trujillo',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
      <html lang="en">
      <body
          className={clsx([
            geistSans.variable,
            geistMono.variable,
            'antialiased',
          ])}
      >
      <MainNavbar/>
      {children}
      </body>
      </html>
  )
}
