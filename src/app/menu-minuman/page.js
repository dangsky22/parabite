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
  
        {/* Menu Minuman */}
        <div className="p-5">
          <h2 className="font-bold text-lg mb-4">Menu Minuman</h2>
  
          {/* Es Teh */}
          <MenuCard
            image="/svg/minuman-esteh.svg" 
            title="Es Teh Original" 
            description="Es Teh Manis" 
          />
  
          {/* Es Teh Lemon */}
          <MenuCard 
            image="/svg/minuman-esteh-lemon.svg" 
            title="Es Teh Lemon" 
            description="Es Teh Rasa Lemon" 
          />
  
          {/* Es Teh Mangga */}
          <MenuCard 
            image="/svg/minuman-esteh-mangga.svg" 
            title="Es Teh Mangga" 
            description="Es Teh Rasa Mangga" 
          />
  
          {/* Es Teh Leci */}
          <MenuCard 
            image="/svg/minuman-esteh-leci.svg" 
            title="Es Teh Leci" 
            description="Es Teh Rasa Leci" 
          />

           {/* Green Tea */}
           <MenuCard 
            image="/svg/minuman-green-teh.svg" 
            title="Green Tea" 
            description="Green Tea Dengan Susu" 
          />    

           {/* Thai Tea */}
           <MenuCard 
            image="/svg/minuman-thai-teh.svg" 
            title="Thai Tea" 
            description="Teh Dengan Susu" 
          />

           {/* Air Mineral */}
           <MenuCard 
            image="/svg/Air Mineral.svg" 
            title="Air Mineral" 
            description="Air Mineral Dengan Berbagai Merk" 
          />

           {/* Susu Cimory */}
           <MenuCard 
            image="/svg/Susu Cimory.svg" 
            title="Susu Cimory" 
            description="Susu Cimory Dengan Berbagai Rasa" 
          />
        </div>
      </div>
    );
  }
  

  