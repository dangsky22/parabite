"use client";
import BoxMakanan from "@/components/share/BoxMakanan";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SemangatKuliah() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://6772217cee76b92dd49137bf.mockapi.io/menus")
      .then((response) => {
        // Filter to include only 'makanan' category
        const makananItems = response.data.filter((item) => item.kategori === 'makanan');
        setItems(makananItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#C34E4E] text-white p-4 relative">
        <div className="flex items-center gap-4">
          <Link href="/dashboard-pembeli" passHref>
            <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
          </Link>
          <h1 className="text-3xl font-semibold">
            Semangat Kuliah <br /> Semakin Panas
          </h1>
        </div>
        {/* Sepuluh SVG */}
        <div className="absolute top-1 right-6">
          <Image src="/svg/sepuluh.svg" alt="Sepuluh" width={70} height={114} />
        </div>
      </header>

      {/* Content */}
      <main className="p-4">
        {items.map((item) => (
          <BoxMakanan key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}
