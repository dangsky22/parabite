'use client';

import { useState } from "react";

export default function Card({ item, withButton, handleCardClick, handlePriceUpdate }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    handlePriceUpdate(item.harga);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handlePriceUpdate(-item.harga);
    }
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => handleCardClick(item.id)}
    >
      <div
        className="w-full h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-black text-lg">{item.nama}</h3>
        <p className="text-sm text-gray-600">Rp {item.harga.toLocaleString("id-ID")}</p>
        {withButton && (
          <div className="mt-2 flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                decreaseQuantity();
              }}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                increaseQuantity();
              }}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
