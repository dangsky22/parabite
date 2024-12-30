"use client";

import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  
  return (
    <>
      <div className="h-full bg-[#F6F6F6]">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#FF982A] to-[#E48621] rounded-b-3xl">
          <div className="flex items-center gap-4 pt-16 px-8">
            <Image src="/svg/logo-parabite.svg" alt="logo parabite" width={43} height={67} />
            <p className="font-bold text-xl text-white">Hai! Kantin Malathi</p>
          </div>
          <div className="bg-white mx-8 pt-8 rounded-lg translate-y-12">
            <div className="flex justify-between px-5">
              <div>
                <p className="font-bold text-lg text-[#474747]">Rp. 40.000,00</p>
                <p className="font-medium text-sm text-[#474747]">Pendapatan hari ini</p>
              </div>
              <div className="bg-[#D28F32] ml-2 flex items-center py-2 px-3 rounded-lg gap-1">
                <Image src="/svg/logo-notif.svg" alt="logo notifikasi" width={20} height={24} />
                <p className="text-white text-base font-medium">Notifikasi</p>
              </div>
            </div>
            <div className="bg-[#D9D9D9] w-full items-center rounded-lg py-2 flex justify-between px-5 mt-4">
              <div className="flex items-center gap-1">
                <Link href="order" passHref>
                <Image src="/svg/pesanan.svg" alt="pesanan" width={28} height={29} />
                </Link>
                <p>Pesanan</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/svg/riwayat.svg" alt="riwayat" width={25} height={25} />
                <p>Riwayat Pesanan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-[107px] px-9">
          <Image src="/svg/makanan.svg" alt="menu makanan" width={372} height={146} />
          <div className="flex pt-3 gap-2 justify-center">
            <div className="bg-[#D28F32] rounded-full w-3 h-3"></div>
            <div className="bg-[#D28F32] rounded-full w-3 h-3"></div>
            <div className="bg-[#D28F32] rounded-full w-3 h-3"></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-14 grid grid-cols-3 items-center px-16 gap-x-16 gap-y-7 pb-24">
          <Link href="/menu-makanan" passHref>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Image src="/images/menu-makanan.png" alt="menu makanan" width={64} height={64} />
              <p className="text-sm font-medium text-[#474747]">Makanan</p>
            </div>
          </Link>
          <Link href="/menu-minuman" passHref>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Image src="/images/menu-minuman.png" alt="menu minuman" width={64} height={64} />
              <p className="text-sm font-medium text-[#474747]">Minuman</p>
            </div>
          </Link>
          <Link href="/menu-favorite" passHref>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Image src="/images/menu-favorite.png" alt="menu favorite" width={64} height={64} />
              <p className="text-sm font-medium text-nowrap text-[#474747]">Menu Favorite</p>
            </div>
          </Link>
          <Link href="/kelola-menu" passHref>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Image src="/images/menu-kelola.png" alt="kelola menu" width={64} height={64} />
              <p className="text-sm font-medium text-nowrap text-[#474747]">Kelola Menu</p>
            </div>
          </Link>
          <Link href="/status-pembayaran" passHref>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Image src="/images/status-pembayaran.png" alt="status pembayaran" width={64} height={64} />
              <p className="text-sm font-medium text-center text-[#474747]">Status Pembayaran</p>
            </div>
          </Link>
          <Link href="/lainnya" passHref>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Image src="/images/menu-lainnya.png" alt="lainnya" width={64} height={64} />
              <p className="text-sm font-medium text-[#474747]">Lainnya</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
