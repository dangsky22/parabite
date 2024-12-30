'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Kantin() {
  const [favoriteMenu, setFavoriteMenu] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://6772217cee76b92dd49137bf.mockapi.io/menus")
      .then((response) => {
        const favoriteItems = response.data.filter((item) => item.isFavorite === true);
        const foodItems = response.data.filter((item) => item.kategori === "makanan");
        const drinkItems = response.data.filter((item) => item.kategori === "minuman");
        setFavoriteMenu(favoriteItems);
        setFoods(foodItems);
        setDrinks(drinkItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCardClick = (id) => {
    router.push(`/detail-menu/${id}`); // Navigasi ke halaman detail berdasarkan id
  };

  const handlePriceUpdate = (harga) => {
    setTotalPrice((prevTotal) => prevTotal + harga);
  };

  return (
    <div className="min-h-screen bg-gray-100 mb-28">
      <Header title="Kantin Malathi" />

      {/* Menu Favorit */}
      <section className="px-6 mt-4">
        <h2 className="text-xl font-semibold text-[#305B8F]">Menu Favorit Disini</h2>
        <div className="flex overflow-x-auto space-x-4 mt-3 scrollbar-hide">
          {favoriteMenu.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40">
              <Card
                item={item}
                withButton
                handleCardClick={handleCardClick}
                handlePriceUpdate={handlePriceUpdate}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Makanan */}
      <section className="px-6 mt-6">
        <h2 className="text-xl font-semibold text-[#106294]">Makanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {foods.map((item) => (
            <Card
              key={item.id}
              item={item}
              withButton
              handleCardClick={handleCardClick}
              handlePriceUpdate={handlePriceUpdate}
            />
          ))}
        </div>
      </section>

      {/* Minuman */}
      <section className="px-6 mt-6">
        <h2 className="text-xl font-semibold text-[#305B8F]">Minuman</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {drinks.map((item) => (
            <Card
              key={item.id}
              item={item}
              withButton
              handleCardClick={handleCardClick}
              handlePriceUpdate={handlePriceUpdate}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer totalPrice={totalPrice} />
    </div>
  );
}
