'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
   return (
      <motion.div
         className="flex items-center justify-center  "
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 10, y: 50 }}
         transition={{ duration: 0.5, delay: 0.3 }}
      >
         <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
         >
            <div className="h-screen bg-orange-100 ">
               <Image
                  src="/images/splash.png"
                  alt="onboarding"
                  width={440}
                  height={956}
                  className=""
               />

               <div className="flex justify-center -translate-y-40">
                  <Link
                     href="/dashboard"
                     className="p-3 bg-gradient-to-r from-[#DAC7A3] to-[#D28F32] w-[304px] py-3 rounded-full text-center"
                  >
                     Mulai
                  </Link>
               </div>
            </div>
         </motion.div>
      </motion.div>
   )
}
