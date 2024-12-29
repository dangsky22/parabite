'use client'

import Header from "./components/header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Kantin() {
  // Data untuk menu
  const favoriteMenu = [
    { id: 1, name: "Ayam Geprek", price: "15.000", image: "/svg/ayam-geprek.svg" },
    { id: 2, name: "Chicken Katsu", price: "15.000", image: "/svg/korean.svg" },
    { id: 3, name: "Teh Leci", price: "5.000", image: "/svg/minuman-esteh-leci.svg" },
  ];

  const foods = [
    { id: 1, name: "Ayam Geprek", price: "15.000", rating: 5, image: "/svg/ayam-geprek.svg" },
    { id: 2, name: "Onigiri", price: "15.000", rating: 5, image: "/svg/onigiri.svg" },
    { id: 3, name: "Korean chicken wing", price: "17.000", rating: 5, image: "/svg/korean.svg" },
    { id: 4, name: "Mentai", price: "10.000", rating: 5, image: "/svg/Mentai.svg" },
    { id: 5, name: "Geprek Sambal Matah", price: "15.000", rating: 5, image: "/svg/geprek-matah.svg" },
    { id: 6, name: "Kebab", price: "15.000", rating: 4, image: "/svg/kebab.svg" },
  ];

  const drinks = [
    { id: 1, name: "Teh Leci", price: "5.000", rating: 4, image: "/svg/minuman-esteh-leci.svg" },
    { id: 2, name: "Teh Mangga", price: "5.000", rating: 4, image: "/svg/minuman-esteh-mangga.svg" },
    { id: 3, name: "Teh Original", price: "5.000", image: "/svg/minuman-esteh.svg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header title="Kantin Malathi" />

      {/* Menu Favorit */}
      <section className="px-6 mt-4">
        <h2 className="text-xl font-semibold text-[#305B8F]">Menu Favorit Disini</h2>
        <div className="flex overflow-x-auto space-x-4 mt-3 scrollbar-hide">
          {favoriteMenu.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40">
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>

        {/* Makanan */}
        <section className="px-6 mt-6">
            <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#305B8F]">Makanan</h2>
            <button className="text-[#305B8F] flex items-center space-x-2">
                <span>FILTER</span>
                <img src="/images/filter-icon.svg" alt="Filter Icon" />
            </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {foods.map((item) => (
                <Card key={item.id} item={item} withButton />
            ))}
            </div>
        </section>

      {/* Minuman */}
      <section className="px-6 mt-6">
        <h2 className="text-xl font-semibold text-[#305B8F]">Minuman</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {drinks.map((item) => (
            <Card key={item.id} item={item} withButton />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
