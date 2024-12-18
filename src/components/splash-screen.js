import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ y: 0 }} // Posisi awal splash screen
      animate={{ y: "-100%", scale: 1 }} // Menarik splash screen ke atas
      transition={{ duration: 1, ease: "easeInOut" }} // Animasi transisi
      onAnimationComplete={onComplete} // Menyelesaikan animasi
      className="max-w-[375px] mx-auto fixed inset-0 bg-orange-500 flex justify-center items-center "
    >
      <div className="text-white text-4xl font-bold ">
        <Image src="/svg/splash-image.svg" width={224} height={366} alt="splash image" />
      </div>
    </motion.div>
  );
}
