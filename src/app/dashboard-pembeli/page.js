"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"
import ScrollingText from "@/components/share/ScrollingText";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array data untuk slider
  const slides = [
    {
      image: "/svg/Dimsum.svg",
      title: "Darna Cafe",
      description: "Dimsum"
    },
    {
      image: "/svg/kebab.svg",
      title: "Malathi",
      description: "Kebab"
    },
    {
      image: "/svg/Onigiri.svg",
      title: "Malathi",
      description: "Onigiri"
    },
    // Tambahkan lebih banyak slide jika diperlukan
  ];

  // Fungsi untuk berpindah ke slide berikutnya
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };



  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Ganti setiap 3 detik

    // Bersihkan interval saat komponen tidak ada
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#FF982A] to-[#E48621] rounded-b-3xl pb-8">
        <div className="flex items-center gap-4 pt-12 px-8">
          <Image src="/svg/logo-parabite.svg" alt="logo parabite" width={40} height={60} />
          <p className="font-bold text-xl text-white">Parabite</p>
        </div>
      </div>

<ScrollingText/>

      <div className="p-4">
        {/* Favorite Slider */}
        <div className="relative overflow-hidden bg-white">
          {/* Gambar slide */}
          <div className="w-full h-[224px] overflow-hidden shadow-xl">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          width={800}  // Lebar gambar dapat disesuaikan sesuai kebutuhan
          height={224} // Tinggi gambar tetap
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

          {/* Teks di pojok kanan bawah */}
          <div className="absolute bottom-2 left-2 text-white px-3 py-1 rounded-lg">
            <h2 className="font-bold text-3xl">{slides[currentSlide].title}</h2>
            <p className="font-bold text-xl">{slides[currentSlide].description}</p>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

{/* Kategori */}
<div className="px-4 mt-6">
  <p className="font-bold text-lg text-[#474747] mb-4">Kategori</p>
  <div className="flex justify-start gap-6">
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

{/* Pilihan Terbaik */}
<div className="px-2 mt-6">
  <p className="font-bold text-lg text-[#474747] mb-4">Pilihan Terbaik</p>
  <div className="grid grid-cols-2 gap-6">
    <Link href="/menu-sepuluh" passHref>
    {/* Box 1 */}
    <div className="flex items-center bg-[#6C96AF] w-[196px] h-[92px] p-4 rounded-lg shadow-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-white">Harga Mulai <span className="text-[#FFB516]">10Rb</span></h4>      
        </div>
      <div className="flex-shrink-0 ml-4">
        <Image
          src="/svg/sepuluh.svg"
          alt="Darna Cafe"
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
    </Link>


    {/* Box 2 */}
    <Link href="/menu-paradrink" passHref>
    <div className="flex items-center bg-[#76C897] w-[196px] h-[92px] p-4 rounded-lg shadow-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-[#474747]">Sehat Itu Gaya Hidup</h4>
      </div>
      <div className="flex-shrink-0 ml-4">
        <Image
          src="/svg/sepuluh2.svg"
          alt="Malathi"
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
    </Link>


    <Link href="/menu-paradrink" passHref>
    {/* Box 3 */}
    <div className="flex items-center bg-[#E7D373]  w-[196px] h-[92px] p-4 rounded-lg shadow-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-[#474747]">Minuman untuk Paradrink</h4>
      </div>
      <div className="flex-shrink-0 ml-4">
        <Image
          src="/svg/sepuluh3.svg"
          alt="Malathi"
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
    </Link>

    <Link href="/semangat-kuliah" passHref>
    {/* Box 4 */}
    <div className="flex items-center w-[196px] h-[92px] bg-[#C34E4E] p-4 rounded-lg shadow-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-sm text-[#474747]">Semangat Kuliah Makin Panas</h4>
      </div>
      <div className="flex-shrink-0 ml-4">
        <Image
          src="/svg/sepuluh4.svg"
          alt="Darna Cafe"
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
    </Link>

  </div>
</div>




  {/* Kantin */}
<div className="px-4 mt-6 mb-24">
  <div className="flex justify-between items-center">
    <h3 className="font-semibold text-gray-800 text-lg">Kantin</h3>
    <Link href="/kantin" passHref>
      <p className="text-sm text-blue-500">View all</p>
    </Link>
  </div>
  <div className="flex overflow-x-auto gap-4 mt-4 scrollbar-hide">
  <Link href="/malathi" passHref>
    <div className="flex-shrink-0 w-48">
      <Image
        src="/svg/Mentai.svg"
        width={192}
        height={128}
        className="rounded-lg object-cover"
      />
      <p className="text-gray-800 text-center font-medium mt-2">Kantin Malathi</p>
    </div>
    </Link>

    <div className="flex-shrink-0 w-48">
      <Image
        src="/svg/kebab.svg"
        alt="Darna Cafe"
        width={292}
        height={251}
        className="rounded-lg object-cover"
      />
      <p className="text-gray-800 text-center font-medium mt-2">Darna Cafe</p>
    </div>
    <div className="flex-shrink-0 w-48">
      <Image
        src="/svg/Onigiri.svg"
        alt="Mie Ayam Pakde"
        width={292}
        height={251}
        className="rounded-lg object-cover"
      />
      <p className="text-gray-800 text-center font-medium mt-2">Mie Ayam Pakde</p>
    </div>
  </div>
</div>

    </div>
  );
}
