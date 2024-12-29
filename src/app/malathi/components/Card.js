import { useState } from "react";
import Image from "next/image";

export default function Card({ item, withButton }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="w-full h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="p-4 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black opacity-75">
        <div className="flex flex-col justify-end space-y-2">
          <h3 className="font-semibold text-white text-lg">{item.name}</h3>
          <p className="text-sm text-white">{item.price}</p>
        </div>

        {withButton && (
          <div className="absolute bottom-4 right-4 flex items-center space-x-3">
            <button className="bg-[#FF8A00] text-white text-sm px-3 py-1 rounded-lg">Pesan</button>
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
        )}
      </div>
    </div>
  );
}
