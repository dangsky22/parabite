"use client"
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-orange-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 10, y: 50 }}
      transition={{ duration: 0.5, delay:1.5 }}
    >
      <motion.div initial={{y: -50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,ease:"easeInOut"}}>

        <Image src="/svg/onboarding.svg" alt="onboarding" width={779} height={779} className="object-contain"/>
      </motion.div>
    </motion.div>
  );
}
