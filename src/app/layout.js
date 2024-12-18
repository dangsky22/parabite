import localFont from 'next/font/local'
import './globals.css'
import ClientWrapper from '@/components/client-wrapper'
import Navbar from '@/components/ui/navbar'
import ClientLayout from './client-layout'

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

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1, maximum-scale=1"
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-center items-center  w-full max-w-[375px] mx-auto `}
         >
            <ClientWrapper>
               <ClientLayout>{children}</ClientLayout>
            </ClientWrapper>
         </body>
      </html>
   )
}
