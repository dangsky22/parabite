import Image from "next/image";
import Link from "next/link";

export default function Kantin() {
  // Data array kantin
  const kantins = [
    {
      id: 1,
      name: "Kantin Malathi",
      image: "svg/ayam-geprek.svg",
    },
    {
      id: 2,
      name: "Darna Caffee",
      image: "/svg/ayam-penyet.svg",
    },
    {
      id: 3,
      name: "Mie Ayam Pakdhe",
      image: "/svg/nyemek.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#E7D373] text-white p-4 relative">
        <div className="flex items-center gap-4">
          <Link href="/dashboard-pembeli" passHref>
            <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
          </Link>
          <h1 className="text-3xl font-semibold">
            Semua Kantin
          </h1>
        </div>
        </header>

      {/* Content */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kantins.map((kantin) => (
          <div
            key={kantin.id}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <Image
              src={kantin.image}
              alt={kantin.name}
              width={400}
              height={300}
              className="object-cover w-full h-56"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">{kantin.name}</h2>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
