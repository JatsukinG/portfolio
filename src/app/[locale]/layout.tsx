import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import './globals.css'
import MainNavbar from '@/layouts/main/navbar'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

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

export default async function LocaleLayout({ children, params }: {
  children: ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
      <html lang={locale}>
      <body
          className={clsx([
            geistSans.variable,
            geistMono.variable,
            'antialiased',
          ])}
      >
      <NextIntlClientProvider>
        <MainNavbar/>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  )
}
