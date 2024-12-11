"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 10, y: 50 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="bg-white translate-y-32 font-bold text-3xl w-[177px] h-[108px] tracking-wide">Selamat <br /> Datang</p>
        <div className="h-screen bg-orange-100">
          <Image
            src="/svg/onboarding.svg"
            alt="onboarding"
            width={779}
            height={779}
            className="object-cover"
          />
            <p className="text-[32px] font-bold  w-[350px] h-[147px] -translate-y-96 ">
           <span className="text-white">Pesan <br /> Makananmu <br /></span> 
           <span className=" text-transparent">
            <span className="bg-gradient-to-r from-[#36BAF8] to-[#3CF4D8] bg-clip-text">Gak Pake Ribet</span>
           </span>
          </p>
          <div className="flex justify-center -translate-y-80">
            <button className="p-3 bg-gradient-to-r from-[#DAC7A3] to-[#D28F32] w-[304px] py-3 rounded-full">
              Mulai
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
