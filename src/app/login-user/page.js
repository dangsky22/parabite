import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from 'next/link'

export default function Page(){
  return(
    
    <div className="h-screen bg-[#FC982D] relative">
    <Image
       src="/svg/login-user.svg"
       alt="login user"
       width={440}
       height={956}
       className="mx-auto"
    />  
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 pt-60">
    <span className="text-white text-base font-semibold">
      Daftar Sebagai
      </span>

    <div className="flex flex-col gap-4 py-8">
    <Link href="">
    <button className="mx-[100px] item-center w-[172px] h-[40px] bg-white text-[#FC982D] font-medium text-[24px] rounded-[32px]">
          Penjual
        </button>
        </Link>
        <Link href="">
        <button className="mx-[100px] item-center w-[172px] h-[40px] bg-white text-[#FC982D] font-medium text-[24px] rounded-[32px]">
          Pembeli
        </button>
        </Link>
    
      
    </div>
    </div>
</div>
  )
}