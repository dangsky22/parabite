"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-[375px] mx-auto fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 flex justify-around py-3">
      {/* Tombol Home */}
      <Link href="/dashboard-penjual" passHref>
        <Image
          src="/svg/navbar-home.svg"
          alt="icon navbar home"
          width={32}
          height={32}
        />
      </Link>
      {/* Tombol Message */}
      <Link href="/message" passHref>
        <Image
          src="/svg/navbar-message.svg"
          alt="icon navbar message"
          width={32}
          height={32}
        />
      </Link>
      {/* Tombol Chat */}
      <Link href="/order" passHref>
        <Image
          src="/svg/navbar-order.svg"
          alt="icon navbar order"
          width={32}
          height={32}
        />
      </Link>
      {/* Tombol Profil */}
      <Link href="/profil" passHref>
        <Image
          src="/svg/navbar-avatar.svg"
          alt="icon navbar profil"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
}
