import MenuCard from "@/components/ui/menu-card";

export default function Page() {
    return (
      <div className="font-sans bg-gray-100 min-h-screen w-full">
        {/* Header */}
        <div className="bg-yellow-500 text-white flex items-center p-4">
          <button className="text-2xl">&larr;</button>
          <h1 className="text-xl font-bold mx-auto">Kantin Malathi</h1>
        </div>
  
        {/* Menu Makanan */}
        <div className="p-5">
          <h2 className="font-bold text-lg mb-4">Menu Makanan</h2>
  
          {/* Ayam Geprek */}
          <MenuCard 
            image="/svg/Ayam Geprek 1.svg" 
            title="Ayam Geprek" 
            description="Komposisi :" 
          />
  
          {/* Korean Chicken */}
          <MenuCard 
            image="/svg/Crispy Seoul-Style Korean Fried Chicken 1.svg" 
            title="Korean Chicken" 
            description="Komposisi :" 
          />
  
          {/* Ayam Geprek Sambal Matah */}
          <MenuCard 
            image="/svg/Ayam Geprek Matah.svg" 
            title="Ayam Geprek Sambal Matah" 
            description="Komposisi :" 
          />
  
          {/* Kebab */}
          <MenuCard 
            image="/svg/kebab.svg" 
            title="Kebab" 
            description="Komposisi :" 
          />

           {/* Onigiri */}
           <MenuCard 
            image="/svg/Onigiri.svg" 
            title="Onigiri" 
            description="Komposisi :" 
          />    

           {/* Mentai */}
           <MenuCard 
            image="/svg/Mentai.svg" 
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
  
  