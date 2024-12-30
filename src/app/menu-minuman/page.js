'use client'

import { useEffect, useState } from "react";
import MenuCard from "@/components/ui/menu-card";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Page() {
  const [menus, setMenus] = useState([]); // State untuk menyimpan data menu
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  // Mengambil data dari API
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("https://6772217cee76b92dd49137bf.mockapi.io/menus");
        setMenus(response.data); // Menyimpan data menus ke state
        setLoading(false);
      } catch (err) {
        setError("Gagal mengambil data menu");
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  // Filter data untuk menampilkan hanya menu dengan kategori "minuman"
  const drinkMenus = menus.filter(menu => menu.kategori === "minuman");

  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full">
      {/* Header */}
      <div className="bg-yellow-500 text-white flex items-center p-4 rounded-b-3xl">
        <Link href="/dashboard-penjual" passHref>
          <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="text-xl font-bold mx-auto">Kantin Malathi</h1>
      </div>

      {/* Menu Minuman */}
      <div className="p-5">
        <h2 className="font-bold text-lg mb-4">Menu Minuman</h2>

        {/* Loading State */}
        {loading && <p>Loading menu...</p>}
        
        {/* Error State */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Menampilkan Menu Minuman dengan data dari API */}
        {!loading && !error && drinkMenus.length > 0 ? (
          drinkMenus.map((menu) => (
            <MenuCard
              key={menu.id}
              image={menu.image}
              title={menu.nama}
              description={menu.deskripsi}
            />
          ))
        ) : (
          <p>No menus available.</p>
        )}
      </div>
    </div>
  );
}
