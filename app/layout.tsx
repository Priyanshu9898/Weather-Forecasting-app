import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarMenu from './components/NavbarMenu'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shipment Frontend Task',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMenu />
        {children}
        <Toaster />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
        </body>
    </html>
  )
}
