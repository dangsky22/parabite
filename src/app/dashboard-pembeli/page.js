import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
  return (
    <div className="h-full bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#FF982A] to-[#E48621] rounded-b-3xl pb-8">
        <div className="flex items-center gap-4 pt-12 px-8">
          <Image src="/svg/logo-parabite.svg" alt="logo parabite" width={40} height={60} />
          <p className="font-bold text-xl text-white">Parabite</p>
        </div>
        <div className="text-center text-white text-sm mt-4 px-8">
          <p>Sehabis makan tolong buang sampah pada tempatnya!</p>
        </div>
      </div>

      {/* Gambar Utama */}
      <div className="p-4">
        <div className="rounded-lg overflow-hidden shadow-md bg-white">
          <Image
            src="/svg/Onigiri.svg"
            alt="Nasi Goreng"
            width={402}
            height={224}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800">Darna Cafe</h2>
            <p className="text-gray-600 text-sm">Nasi Goreng</p>
          </div>
        </div>
      </div>

      {/* Kategori */}
      {/* Kategori */}
<div className="mt-6">
  <p className="font-bold text-lg text-[#474747] mb-4">Kategori</p>
  <div className="flex justify-around">
    <div className="flex flex-col items-center">
      <div className="bg-[#CFE6F9] flex items-center justify-center w-16 h-16 rounded-full">
        <Image src="/svg/makanan-berat.svg" alt="Makanan Berat" width={32} height={32} />
      </div>
      <p className="mt-2 text-sm font-medium text-[#474747] text-center">Makanan Berat</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="bg-[#CFE6F9] flex items-center justify-center w-16 h-16 rounded-full">
        <Image src="/svg/minuman.svg" alt="Minuman" width={32} height={32} />
      </div>
      <p className="mt-2 text-sm font-medium text-[#474747] text-center">Minuman</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="bg-[#CFE6F9] flex items-center justify-center w-16 h-16 rounded-full">
        <Image src="/svg/cemilan.svg" alt="Cemilan" width={32} height={32} />
      </div>
      <p className="mt-2 text-sm font-medium text-[#474747] text-center">Cemilan</p>
    </div>
  </div>
</div>


      {/* Temukan Pilihanmu */}
      <div className="px-4 mt-6">
        <h3 className="font-semibold text-gray-800 text-lg mb-3">Temukan Pilihanmu</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <p className="text-yellow-800 font-bold">Harga Mulai 10Rb</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <p className="text-yellow-800 font-bold">Minuman Untuk ParaDrink</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-green-800 font-bold">Sehat Itu Gaya Hidup</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center">
            <p className="text-red-800 font-bold">Semangat Kuliah Makin Panas</p>
          </div>
        </div>
      </div>

      {/* Kantin */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 text-lg">Kantin</h3>
          <Link href="/kantin" passHref>
            <p className="text-sm text-blue-500">View all</p>
          </Link>
        </div>
        <div className="flex overflow-x-scroll gap-4 mt-4 scrollbar-hide">
          <div className="flex-shrink-0 w-48">
            <Image
              src="/svg/Rizol Mayo.svg"
              width={192}
              height={128}
              className="rounded-lg object-cover"
            />
            <p className="text-gray-800 text-center font-medium mt-2">Kantin Malathi</p>
          </div>
          <div className="flex-shrink-0 w-48">
            <Image
              src="/svg/Rizol Mayo.svg"
              alt="Darna Cafe"
              width={192}
              height={128}
              className="rounded-lg object-cover"
            />
            <p className="text-gray-800 text-center font-medium mt-2">Darna Cafe</p>
          </div>
        </div>
      </div>


    </div>
    
  );
}
