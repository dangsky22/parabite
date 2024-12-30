"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F6F6F6]   ">
      {/* Header */}
      <div className="bg-[#E48621] ">

      <div className="py-4 px-6 rounded-b-3xl text-white flex items-center justify-between">
        <Link href="/dashboard-penjual" passHref>
          <Image src="/svg/back.svg" alt="Back" width={32} height={32} />
        </Link>
        <div className=" ">
          <Image
            src="/svg/logo-parabite.svg"
            alt="Logo"
            width={45}
            height={70}
            className="inline"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-center  text-white py-8 px-6">
      <p className="mt-2 text-sm flex items-center justify-start">
          <Image
            src="/svg/test.svg"
            alt="Phone Icon"
            width={36}
            height={36}
            className="mr-2"
          />
          KANTIN MALATHI
        </p>
        <p className="mt-2 text-sm flex items-center justify-start">
          <Image
            src="/svg/phone.svg"
            alt="Phone Icon"
            width={36}
            height={36}
            className="mr-2"
          />
          +62123450976
        </p>
        <p className="mt-2 text-sm flex items-center justify-start">
          <Image
            src="/svg/Email.svg"
            alt="Email Icon"
            width={36}
            height={36}
            className="mr-2"
          />
          MELATHI@GMAIL.COM
        </p>
      </div>
      </div>

      {/* Content Section */}
      <div className="px-6 py-6">
        {/* Pendapatan Section */}
        <Link href="/pendapatan" passHref>
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-[#E48621] text-lg font-bold text-center">
            Pendapatan
          </h2>
        </div>
        </Link>

        {/* Galeri Section */}
        <div>
          <h3 className="font-medium text-[#474747] mb-4">Galeri Saya :</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <Image
                src="/svg/ayam-geprek.svg"
                alt="Menu 1"
                className="rounded-lg w-full object-cover"
                width={120}
                height={120}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/svg/ayam-penyet.svg"
                alt="Menu 2"
                className="rounded-lg w-full object-cover"
                width={120}
                height={120}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/svg/minuman-esteh-leci.svg"
                alt="Menu 3"
                className="rounded-lg w-full object-cover"
                width={120}
                height={120}
              />
            </div>
            <div className="flex-none">
              <button className="bg-[#E48621] text-white p-2 rounded-lg shadow-md">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Menu Links */}
        <div className="mt-6 space-y-4">
          <Link
            href="/edit-profile"
            passHref
            className="flex items-center space-x-3 text-[#474747]"
          >
            <Image
              src="/svg/edit-profile.svg"
              alt="Edit Profile"
              width={20}
              height={20}
            />
            <span>Edit Profile</span>
          </Link>
          <Link
            href="/settings/language"
            passHref
            className="flex items-center space-x-3 text-[#474747]"
          >
            <Image src="/svg/Alphabet.svg" alt="Language" width={20} height={20} />
            <span>Bahasa</span>
          </Link>
          <Link
            href="/settings/delete-account"
            passHref
            className="flex items-center space-x-3 text-[#474747]"
          >
            <Image
              src="/svg/Trash.svg"
              alt="Hapus Akun"
              width={20}
              height={20}
            />
            <span>Hapus Akun</span>
          </Link>
          <Link
            href="/settings/security"
            passHref
            className="flex items-center space-x-3 text-[#474747]"
          >
            <Image
              src="/svg/Lock.svg"
              alt="Keamanan"
              width={20}
              height={20}
            />
            <span>Keamanan</span>
          </Link>
          <Link
            href="/help"
            passHref
            className="flex items-center space-x-3 text-[#474747]"
          >
            <Image src="/svg/Help.svg" alt="Help" width={20} height={20} />
            <span>Bantuan?</span>
          </Link>
          <Link
            href="/logout"
            passHref
            className="flex items-center space-x-3 text-[#474747]"
          >
            <Image
              src="/svg/Logout.svg"
              alt="Log Out"
              width={20}
              height={20}
            />
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
