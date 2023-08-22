import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DRIV3',
  description: 'A Decentralized Storage System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='fonts'>{children}</body>
    </html>
  )
}
