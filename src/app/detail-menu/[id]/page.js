'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function DetailMenu() {
  const { id } = useParams(); // Mendapatkan id dari URL
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios
      .get(`https://6772217cee76b92dd49137bf.mockapi.io/menus/${id}`)
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu details:", error);
      });
  }, [id]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{menu.nama}</h1>
      <img src={menu.image} alt={menu.nama} className="w-full h-auto mt-4" />
      <p className="mt-4">Harga: Rp {menu.harga.toLocaleString("id-ID")}</p>
      <p className="mt-2">Deskripsi: {menu.deskripsi}</p>
    </div>
  );
}
