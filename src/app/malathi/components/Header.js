import Image from "next/image";
import Link from "next/link";

export default function Header({ title }) {
    return (
      <header className="bg-[#FFD77B] p-4 flex items-center">
        <div className="flex items-center gap-4">
          <Link href="/dashboard-pembeli" passHref>
            <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
          </Link>
        <h1 className="ml-4 text-lg font-bold text-[#305B8F]">{title}</h1>
        </div>
      </header>
    );
  }
  