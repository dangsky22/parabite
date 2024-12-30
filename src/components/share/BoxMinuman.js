"use client";
import Image from "next/image";
import { useState } from "react";

const BoxMinuman = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg mb-4">
      {/* Image */}
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.nama} // Menggunakan 'nama' dari API
          width={80}
          height={80}
          className="rounded-lg"
        />
        {/* Info */}
        <div>
          {/* Nama Makanan */}
          <h3 className="text-lg font-semibold text-gray-800">{item.nama}</h3> {/* Menggunakan nama */}
          {/* Harga */}
          <p className="text-gray-500">Rp {item.harga}</p> {/* Menggunakan harga */}
          {/* Stars */}
          <div className="flex gap-1 text-yellow-500 text-xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>
      </div>
      {/* Favorite Icon */}
      <button
        onClick={handleFavoriteClick}
        className={`rounded-xl p-2 ${isFavorite ? "bg-pink-500" : "bg-[#5DA399]"}`}
      >
        <Image
          src="/svg/fav.svg"
          alt="Favorite"
          width={24}
          height={24}
          className={`${isFavorite ? "text-pink-500" : "text-gray-500"}`}
        />
      </button>
    </div>
  );
};

export default BoxMinuman;
