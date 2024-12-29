'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
   return (
      <motion.div
         className=" relative flex items-center justify-center bg-[#FC982D]  "
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 10, y: 50 }}
         transition={{ duration: 0.5, delay: 0.3 }}
      >
         <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
         >
            <div className="h-screen  bg-cover bg-center bg-[url('/svg/animasi.svg')] ">
            <h1 className='absolute top-12 font-bold text-4xl  px-6'>Selamat <br /> Datang</h1>
               <Image
                  src="/images/splash.gif"
                  alt="onboarding"
                  width={440}
                  height={956}
                  className="pt-[300px]"
               />

               <div className="flex justify-center ">
                  <Link
                     href="/login"
                     className="p-3 bg-gradient-to-r from-[#DAC7A3] to-[#D28F32] w-[304px]  rounded-full text-center "
                  >
                     Mulai
                  </Link>
               </div>
               
            </div>
         </motion.div>
      </motion.div>
   )
}
