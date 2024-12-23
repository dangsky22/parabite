import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Page(){
  return(
    
    <div className="h-screen bg-[#FC982D] ">
    <Image
       src="/svg/login-user.svg"
       alt="login user"
       width={440}
       height={956}
       className="mx-auto"
    />  
</div>
  )
}