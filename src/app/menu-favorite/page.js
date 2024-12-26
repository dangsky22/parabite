import MenuCard from "@/components/ui/menu-card";
import Link from "next/link";
import Image from "next/image";


export default function Page() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-yellow-500 text-white flex items-center p-4 rounded-b-3xl">
        <Link href="/dashboard-penjual" passHref>
        <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="text-xl font-bold mx-auto">Kantin Malathi</h1>
      </div>

      {/* Menu Favorit */}
      <div className="p-5">
        <h2 className="font-bold text-lg mb-4">Menu Favorit</h2>

        {/* Grid Menu */}
        <div className="grid grid-cols-2 gap-6">
          <MenuCard image="/svg/Thai Tea.svg" />
          <MenuCard image="/svg/Ayam Geprek 1.svg" />
          <MenuCard image="/svg/Ayam Geprek 1.svg" />
          <MenuCard image="/svg/Ayam Geprek 1.svg" />
        </div>
      </div>
    </div>
  );
}
