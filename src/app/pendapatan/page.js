"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PendapatanPage() {
  const router = useRouter(); // Inisialisasi useRouter
  const [activeTab, setActiveTab] = useState("hari"); // State untuk tab aktif

  const dataHari = [
    { waktu: "Hari ini, 12:00", pesanan: "19", metode: "CASH", total: "Rp. 20.000" },
    { waktu: "Hari ini, 13:00", pesanan: "20", metode: "QRIS", total: "Rp. 20.000" },
    { waktu: "Hari ini, 13:05", pesanan: "21", metode: "CASH", total: "Rp. 20.000" },
    { waktu: "Hari ini, 13:13", pesanan: "22", metode: "QRIS", total: "Rp. 10.000" },
    { waktu: "Hari ini, 13:25", pesanan: "23", metode: "CASH", total: "Rp. 25.000" },
    { waktu: "Hari ini, 13:40", pesanan: "24", metode: "QRIS", total: "Rp. 30.000" },
    { waktu: "Hari ini, 14:00", pesanan: "25", metode: "QRIS", total: "Rp. 10.000" },
    { waktu: "Hari ini, 14:10", pesanan: "26", metode: "QRIS", total: "Rp. 20.000" },
    { waktu: "Hari ini, 14:40", pesanan: "27", metode: "QRIS", total: "Rp. 15.000" },
    { waktu: "Hari ini, 15:00", pesanan: "28", metode: "CASH", total: "Rp. 20.000" },
    { waktu: "Hari ini, 15:15", pesanan: "29", metode: "CASH", total: "Rp. 20.000" },
  ];

  const dataMinggu = [
    { waktu: "Senin", pesanan: "102", total: "Rp. 300.000" },
    { waktu: "Selasa", pesanan: "97", total: "Rp. 280.000" },
    { waktu: "Rabu", pesanan: "85", total: "Rp. 250.000" },
    { waktu: "Kamis", pesanan: "120", total: "Rp. 400.000" },
    { waktu: "Jumat", pesanan: "110", total: "Rp. 350.000" },
    { waktu: "Sabtu", pesanan: "90", total: "Rp. 300.000" },
    { waktu: "Minggu", pesanan: "75", total: "Rp. 250.000" },
  ];

  // Fungsi untuk menghitung total pendapatan
  const calculateTotalPendapatan = (data) => {
    return data.reduce((total, item) => {
      const itemTotal = parseInt(item.total.replace(/[^0-9]/g, ""), 10); // Ambil angka dari string "Rp."
      return total + itemTotal;
    }, 0);
  };

  const renderTableRows = (data) => {
    return data.map((row, index) => (
      <tr key={index} className="text-center border-b">
        <td className="py-2">{row.waktu}</td>
        <td>{row.pesanan}</td>
        {row.metode && <td>{row.metode}</td>} {/* Render metode hanya jika ada */}
        <td>{row.total}</td>
      </tr>
    ));
  };

  const totalPendapatan =
    activeTab === "hari"
      ? calculateTotalPendapatan(dataHari)
      : calculateTotalPendapatan(dataMinggu);

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-[#E48621] py-4 px-6 text-white flex items-center">
        <button
          className="mr-4"
          onClick={() => router.push("/profil")} // Navigasi ke halaman "Profil"
        >
          <img src="/svg/back.svg" alt="Back" width={24} height={24} />
        </button>
        <h1 className="text-lg font-bold">Pendapatan</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center bg-white shadow-md">
        <button
          className={`flex-1 py-3 text-center font-bold ${
            activeTab === "hari" ? "text-[#E48621] border-b-4 border-[#E48621]" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("hari")}
        >
          Hari
        </button>
        <button
          className={`flex-1 py-3 text-center font-bold ${
            activeTab === "minggu" ? "text-[#E48621] border-b-4 border-[#E48621]" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("minggu")}
        >
          Minggu
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6 py-4">
        <table className="w-full text-sm bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#E48621] text-white">
            <tr>
              <th className="py-2">Tanggal & Waktu</th>
              <th>
                {activeTab === "hari" ? "No. Pesanan" : "Total Pesanan"} {/* Header kolom dinamis */}
              </th>
              {activeTab === "hari" && <th>Metode Pembayaran</th>} {/* Kolom metode hanya untuk tab Hari */}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{renderTableRows(activeTab === "hari" ? dataHari : dataMinggu)}</tbody>
        </table>

        {/* Total Pendapatan */}
        <div className="mt-4 bg-[#E48621] text-white text-center py-2 rounded-lg shadow-md">
          <span className="font-bold">Total Pendapatan:</span> Rp. {totalPendapatan.toLocaleString("id-ID")}
        </div>
      </div>
    </div>
  );
}
