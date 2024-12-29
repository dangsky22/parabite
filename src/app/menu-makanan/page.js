import MenuCard from "@/components/ui/menu-card";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <div className="font-sans bg-gray-100 min-h-screen w-full">
            {/* Header */}
            <div className="bg-yellow-500 text-white flex items-center p-4 rounded-b-3xl">
                <Link href="/dashboard-penjual" passHref>
                    <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
                </Link>
                <h1 className="text-xl font-bold mx-auto">Kantin Malathi</h1>
            </div>

            {/* Menu Makanan */}
            <div className="p-5">
                <h2 className="font-bold text-lg mb-4">Menu Makanan</h2>

                {/* Ayam Geprek */}
                <MenuCard 
                    image="/svg/ayam-geprek.svg" 
                    title="Ayam Geprek" 
                    description="Ayam Goreng + Sambal Bawang"
                />

                {/* Korean Chicken */}
                <MenuCard 
                    image="/svg/korean.svg" 
                    title="Korean Chicken" 
                    description="Ayam dengan Saus Korea"
                />

                {/* Ayam Geprek Sambal Matah */}
                <MenuCard 
                    image="/svg/geprek-matah.svg" 
                    title="Ayam Geprek Sambal Matah" 
                    description="Komposisi:"
                />

                {/* Kebab */}
                <MenuCard 
                    image="/svg/kebab.svg" 
                    title="Kebab" 
                    description="Komposisi:"
                />

                {/* Additional Menu Items */}
                <MenuCard 
                    image="/svg/Onigiri.svg" 
                    title="Onigiri" 
                    description="Nasi kepal isi Ayam" 
                />    

                <MenuCard 
                    image="/svg/Mentai.svg" 
                    title="Mentai" 
                    description="Nasi Dengan Saus Mentai" 
                />

                <MenuCard 
                    image="/svg/Rizol Mayo.svg" 
                    title="Risol Mayo" 
                    description="Risol isi Telur dan Mayonaise" 
                />

                <MenuCard 
                    image="/svg/Dimsum.svg" 
                    title="Dimsum" 
                    description="Dimsum Isi Daging dan Udang" 
                />
            </div>
        </div>
    );
}
