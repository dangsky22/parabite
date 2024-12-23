import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Page(){
  return(
    
 <div className="h-screen bg-[#FC982D] ">
                <Image
                   src="/svg/welcome-page.svg"
                   alt="welcome page"
                   width={440}
                   height={956}
                   className="mx-auto"
                />
                <div className="absolute top-[500px] left-1/2 transform -translate-x-1/2 w-[250px] max-w-[350px] px-[20px] text-center mt-10">
              <p className="text-xl text-black font-medium mb-10"> 
                Jajan di kantin tanpa antri tanpa ribet
              </p>
              <button className="bg-orange-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 mt-10">
                 Mulai</button>
              </div>
              
</div>
  )
}