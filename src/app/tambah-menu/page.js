"use client"; // Tambahkan ini di baris pertama

import Image from "next/image";
import { useRouter } from "next/navigation"; // Gunakan next/navigation untuk App Router

export default function EditMenu() {
  const router = useRouter(); // Inisialisasi router

  const handleSave = () => {
    // Navigasi ke dashboard-penjual
    router.push("/dashboard-penjual");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="">

        {/* Foto */}
        <div className="px-[50px] mt-20">
          <img
            src="/svg/Rizol Mayo.svg"
            alt="Menu"
            className="w-full h-[180px] rounded-md"
          />
          <div className="grid justify-center items-center -translate-y-40">
            <Image
              src="/svg/foto.svg"
              alt="foto"
              width={92}
              height={75}
              className="mx-[30px] mb-[33px]"
            />
            <div className="flex justify-start gap-2">
              <Image src="/svg/edit-white.svg" alt="edit" width={29} height={29} />
              <h1 className="text-center text-[20px] font-semibold text-white">
                UBAH FOTO
              </h1>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4 -translate-y-24">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-700">NAMA</label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                defaultValue="Nasi Ayam Geprek"
                className="flex-1 px-4 text-white py-2 border border-gray-300 bg-[#DF9500] rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
              <button className="ml-2">
                <Image src="/svg/edit.svg" alt="edit" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Harga */}
          <div>
            <label className="block text-sm font-medium text-gray-700">HARGA</label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                defaultValue="15.000"
                className="flex-1 px-4 text-white py-2 border border-gray-300 bg-[#DF9500] rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
              <button className="ml-2">
                <Image src="/svg/edit.svg" alt="edit" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-sm font-medium text-gray-700">DESKRIPSI</label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                defaultValue="Ayam goreng + sambal bawang"
                className="flex-1 px-4 py-2 text-white border border-gray-300 bg-[#DF9500] rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
              <button className="ml-2">
                <Image src="/svg/edit.svg" alt="edit" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Informasi Gizi */}
          <div>
            <label className="block text-sm font-medium text-gray-700">INFORMASI GIZI</label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                defaultValue="Kal 263, Lemak 17,99g, Karb 7,6g"
                className="flex-1 px-4 py-2 text-white border border-gray-300 bg-[#DF9500] rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
              <button className="ml-2">
                <Image src="/svg/edit.svg" alt="edit" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Tombol Simpan */}
        <div className="px-14 mb-10">
          <button
            className="w-full bg-yellow-500 text-white py-2 rounded-md shadow hover:bg-yellow-600"
            onClick={handleSave} // Tambahkan event handler
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
}
