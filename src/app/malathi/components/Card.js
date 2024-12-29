"use client"

import { useState } from "react";
import Image from "next/image";

export default function Card({ item, withButton, handlePriceUpdate }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleOrderClick = () => {
    if (quantity === 0) {
      setQuantity(1);
      setIsOrdering(true);
      handlePriceUpdate(parseInt(item.price.replace(".", "")) * 1); // Send price to parent
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handlePriceUpdate(parseInt(item.price.replace(".", ""))); // Add price for each increase
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handlePriceUpdate(-parseInt(item.price.replace(".", ""))); // Subtract price for each decrease
    } else if (quantity === 1) {
      setQuantity(0);
      setIsOrdering(false);
      handlePriceUpdate(-parseInt(item.price.replace(".", ""))); // Subtract price when resetting
    }
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
            {!isOrdering && quantity === 0 && (
              <button
                onClick={handleOrderClick}
                className="bg-[#FF8A00] text-white text-sm px-3 py-1 rounded-lg"
              >
                Pesan
              </button>
            )}
            {isOrdering && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseQuantity}
                  className="bg-[#FF8A00] text-white text-4xl rounded-md px-4 pb-2"
                >
                  <p> - </p>
                </button>
                <span className="text-white">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="bg-[#FF8A00] text-black rounded-md px-5 py-3"
                >
                  <p> + </p>
                </button>
              </div>
            )}
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
