import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from 'next/link'

export default function Page(){
  return(
    
    <div className="h-screen bg-[#FC982D] ">
    <Image
       src="/svg/login-page.svg"
       alt="login page"
       width={440}
       height={956}
       className="mx-auto"
    />

 <div className="absolute top-[400px] transform -translate-x-3/2 w-[250px] max-w-[350px] px-[57px]">
   <label className="text-xl text-white font-medium"> 
     Email/Username
   </label>
  
   <div className="relative my-2">
      <Image
         src="/svg/icon-user.svg"
         alt="icon user"
         width={23}
         height={30}
         className="absolute left-4 top-1/2 transform -translate-y-1/2"
         />
         
     <input
       required
       type="email"
       name="email"
       placeholder="Masukan Email/Username"
       className="py-[16px] pl-[45px] pr-[30px] rounded-[32px]"
     />
   </div>
   <label className="text-xl text-white font-medium"> 
     Password
   </label>
  
   <div className="relative mt-2">
      <Image
         src="/svg/icon-pw.svg"
         alt="icon password"
         width={23}
         height={30}
         className="absolute left-4 top-1/2 transform -translate-y-1/2"
         />
         
     <input
       required
       type="password"
       name="password"
       placeholder="Masukan Password"
       className="py-[16px] pl-[45px] pr-[30px] rounded-[32px]"
     />
   </div>
   
 </div>   
 <div className=" flex justify-center gap-10 mt-[-80px] "> 
      <Link href="#">
       <Image
       src="/svg/icon-fb.svg"
       alt="icon facebook"
       width={48}
       height={48}
       className=""
       />
       </Link>

       <Link href="#">
       <Image
       src="/svg/icon-google.svg"
       alt="icon facebook"
       width={48}
       height={48}
       className=""
       /> 
       </Link> 

       <Link href="#">
       <Image
       src="/svg/icon-ip.svg"
       alt="icon facebook"
       width={48}
       height={48}
       className=""
       /> 
       </Link>   

 </div>  
</div>
  )
}