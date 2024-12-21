import MenuCard from "@/components/ui/menu-card";
import Link from "next/link";

export default function Page() {
    return (
      <div className="font-sans bg-gray-100 min-h-screen w-full">
        {/* Header */}
        <div className="bg-yellow-500 text-white flex items-center p-4 rounded-b-3xl">
          <Link href="/dashboard" passHref>
          <button className="text-2xl">&larr;</button>
          </Link>
          <h1 className="text-xl font-bold mx-auto">Kantin Malathi</h1>
        </div>
  
        {/* Menu Minuman */}
        <div className="p-5">
          <h2 className="font-bold text-lg mb-4">Menu Minuman</h2>
  
          {/* Ayam Geprek */}
          <MenuCard
            image="/svg/minuman-esteh.svg" 
            title="Ayam Geprek" 
            description="Komposisi :" 
          />
  
          {/* Korean Chicken */}
          <MenuCard 
            image="/svg/minuman-esteh-lemon.svg" 
            title="Korean Chicken" 
            description="Komposisi :" 
          />
  
          {/* Ayam Geprek Sambal Matah */}
          <MenuCard 
            image="/svg/minuman-esteh-mangga.svg" 
            title="Ayam Geprek Sambal Matah" 
            description="Komposisi :" 
          />
  
          {/* Kebab */}
          <MenuCard 
            image="/svg/minuman-esteh-leci.svg" 
            title="Kebab" 
            description="Komposisi :" 
          />

           {/* Onigiri */}
           <MenuCard 
            image="/svg/minuman-green-teh.svg" 
            title="Onigiri" 
            description="Komposisi :" 
          />    

           {/* Mentai */}
           <MenuCard 
            image="/svg/minuman-thai-teh.svg" 
            title="Mentai" 
            description="Komposisi :" 
          />

           {/* Risol Mayo */}
           <MenuCard 
            image="/svg/Rizol Mayo.svg" 
            title="Risol Mayo" 
            description="Komposisi :" 
          />

           {/* Dimsum */}
           <MenuCard 
            image="/svg/Dimsum.svg" 
            title="Dimsum" 
            description="Komposisi :" 
          />
        </div>
      </div>
    );
  }
  

  