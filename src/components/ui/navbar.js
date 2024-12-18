"use client"
import Image from "next/image";

export default function Navbar(){
  return(
    <div className="max-w-[375px] mx-auto fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 flex justify-around py-3">
      <Image src="/svg/navbar-home.svg" alt="icon navbar" width={32} height={32} />
      <Image src="/svg/navbar-message.svg" alt="icon navbar" width={32} height={32} />
      <Image src="/svg/navbar-order.svg" alt="icon navbar" width={32} height={32} />
      <Image src="/svg/navbar-avatar.svg" alt="icon navbar" width={32} height={32} />
    </div>
  )
}