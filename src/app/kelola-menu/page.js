import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const menuItems = [
    // Data menu
    {
      image: "/svg/ayam-geprek.svg",
      name: "Ayam Geprek",
      price: "Rp15.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/korean.svg",
      name: "Korean Chicken",
      price: "Rp17.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/Mentai.svg",
      name: "Mentai",
      price: "Rp25.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/geprek-matah.svg",
      name: "Ayam Geprek Sambal Matah",
      price: "Rp15.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/kebab.svg",
      name: "Kebab",
      price: "Rp10.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/Onigiri.svg",
      name: "Onigiri",
      price: "Rp10.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/Dimsum.svg",
      name: "Dimsum",
      price: "Rp15.000",
      rating: 5,
      category: "MAKANAN",
    },
    {
      image: "/svg/risol-mayo.svg",
      name: "Risol Mayo",
      price: "Rp15.000",
      rating: 5,
      category: "MAKANAN",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-yellow-500 text-white p-6 flex items-center rounded-b-3xl">
        <Link href="/dashboard-penjual" passHref>
          <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="text-2xl font-bold mx-auto">Kantin Malathi</h1>
      </div>

      {/* Tombol Tambah Menu dan Filter */}
      <div className="flex justify-between items-center p-6 gap-x-4">
        <Link href="tambah-menu" passHref>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold flex items-center space-x-2">
          <span>&#43;</span>
          <span>Tambah Menu</span>
        </button>
        </Link>
        <button className="text-gray-600 px-6 py-3 rounded-lg font-bold flex items-center space-x-2">
          <span>Filter</span>
          <img src="/svg/filter.svg" alt="Filter Icon" className="w-6 h-6" />
        </button>
      </div>

      {/* Daftar Menu */}
      <div className="p-[16px] grid grid-cols-1 gap-y-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center bg-white rounded-lg shadow-xl p-6 space-x-6 w-full mx-auto"
          >
            {/* Gambar */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            {/* Detail Menu */}
            <div className="flex-1">
              <div className="inline-block text-xs font-semibold text-gray-700 rounded-full border border-1 border-black px-3 py-1">
                {item.category}
              </div>

              <h5 className="font-semibold text-gray-800 text-lg mt-2">{item.name}</h5>
              <p className="text-gray-500 text-base">{item.price}</p>
              <div className="text-yellow-500 text-base">
                {Array.from({ length: item.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>

            {/* Tombol Delete dan Edit */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center ">
              <button className="p-3" title="Delete">
                <img src="/svg/Delete.svg" alt="Delete Icon" className="w-6 h-6" />
              </button>
              <button className="p-3" title="Edit">
                <img src="/svg/Edit.svg" alt="Edit Icon" className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
