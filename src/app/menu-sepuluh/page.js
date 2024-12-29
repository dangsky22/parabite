import BoxMakanan from "@/components/share/BoxMakanan";
import Link from "next/link";
import Image from "next/image";

export default function Sepuluh() {
  const items = [
    {
      toko: "Kantin Malathi",
      name: "Kebab",
      price: "10.000",
      image: "/svg/kebab.svg",
    },
    {
      toko: "Kantin Malathi",
      name: "Onigiri",
      price: "10.000",
      image: "/svg/onigiri.svg",
    },
    {
      toko: "Darna Caffee",
      name: "Ayam Geprek",
      price: "10.000",
      image: "/svg/ayam-geprek.svg",
    },
    {
      toko: "Kantin Malathi",
      name: "Dimsum",
      price: "10.000",
      image: "/svg/dimsum.svg",
    },
    {
      toko: "Kantin Malathi",
      name: "Crispy Chicken Taiwan",
      price: "10.000",
      image: "/svg/taiwan.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#6C96AF] text-white p-4 relative">
        <div className="flex items-center gap-4">
          <Link href="/dashboard-pembeli" passHref>
            <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
          </Link>
          <h1 className="text-3xl font-semibold">
            Harga Mulai <br /> <span className="text-yellow-300">10Rb</span>
          </h1>
        </div>
        {/* Sepuluh SVG */}
        <div className="absolute top-1 right-6">
          <Image src="/svg/sepuluh.svg" alt="Sepuluh" width={70} height={114} />
        </div>
      </header>

      {/* Content */}
      <main className="p-4">
        {items.map((item, index) => (
          <BoxMakanan key={index} item={item} />
        ))}
      </main>
    </div>
  );
}
