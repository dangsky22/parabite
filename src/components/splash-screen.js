import {motion} from "framer-motion"
import Image from "next/image"
export default function  SplashScreen ({setSplashDone}){
    return(
        <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%", scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => setSplashDone(true)}
      className="fixed inset-0 bg-orange-500 flex justify-center items-center z-50"
    >
      <div className="text-white text-4xl font-bold pt-40">
       <Image src="/svg/splash-image.svg" width={224} height={366} alt="splash image"/>
      </div>
    </motion.div>
    )
}