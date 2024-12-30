"use client";
import BoxMinuman from "@/components/share/BoxMinuman";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Paradrink() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://6772217cee76b92dd49137bf.mockapi.io/menus")
      .then((response) => {
        // Filter to include only 'minuman' category
        const minumanItems = response.data.filter((item) => item.kategori === 'minuman');
        setItems(minumanItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#E7D373] text-white p-4 relative">
        <div className="flex items-center gap-4">
          <Link href="/dashboard-pembeli" passHref>
            <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
          </Link>
          <h1 className="text-3xl font-semibold">
            Minuman <br /> Untuk Paradrink
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
          <BoxMinuman key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}
