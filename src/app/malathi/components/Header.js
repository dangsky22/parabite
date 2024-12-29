import Image from "next/image";
import Link from "next/link";

export default function Header({ title }) {
  return (
    <header 
      className="bg-[#FFD77B] p-4 flex items-center w-full h-[112px]"
      style={{
        backgroundImage: 'url(/svg/bgKantin.svg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center gap-4">
        <Link href="/dashboard-pembeli" passHref>
          <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="ml-4 text-3xl font-bold text text-white">{title}</h1>
      </div>
    </header>
  );
}
