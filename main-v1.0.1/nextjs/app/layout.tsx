import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import { satoshi } from '@/utils/fonts'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'

export const metadata: Metadata = {
  title: 'Rivor Template',
  icons: {
    icon: '/images/favicon-96x96.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
