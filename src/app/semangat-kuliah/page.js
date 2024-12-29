import BoxPanas from "./components/BoxPanas";
import Link from "next/link";
import Image from "next/image";

export default function SemangatKuliah() {
  const items = [
    {
      toko: "Kantin Malathi",
      name: "Ayam Geprek",
      price: ".0500",
      image: "/svg/ayam-geprek.svg",
    },
    {
      toko: "Kantin Malathi",
      name: "Chicken Korean",
      price: "5.000",
      image: "/svg/korean.svg",
    },
    {
      toko: "Darna Caffee",
      name: "Mie Nyemek",
      price: "5.000",
      image: "/svg/nyemek.svg",
    },
    {
      toko: "Kantin Malathi",
      name: "Ayam Geprek Matah",
      price: "15.000",
      image: "/svg/geprek-matah.svg",
    },
    {
      toko: "Darna Caffee",
      name: "Ayam Penyet",
      price: "5.000",
      image: "/svg/ayam-penyet.svg",
    },
    {
      toko: "Mie Ayam Pakdhe",
      name: "Crispy Chicken Taiwan",
      price: "5.000",
      image: "/svg/taiwan.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#C34E4E] text-white p-4 relative">
        <div className="flex items-center gap-4">
          <Link href="/dashboard-pembeli" passHref>
            <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
          </Link>
          <h1 className="text-3xl font-semibold">
            Semangat Kuliah <br /> Semakin Panas
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
          <BoxPanas key={index} item={item} />
        ))}
      </main>
    </div>
  );
}
