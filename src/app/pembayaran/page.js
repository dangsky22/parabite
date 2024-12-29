"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Pembayaran() {
  const [isPreOrder, setIsPreOrder] = useState(false);
  const [pickupTime, setPickupTime] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // State to track payment method
  const [showModal, setShowModal] = useState(false); // State to show/hide the modal

  const handlePesanClick = () => {
    if (!selectedPaymentMethod) {
      setShowModal(true); // Show the modal if no payment method is selected
    } else {
      // Proceed with the payment or order submission logic
      console.log("Proceed with payment:", selectedPaymentMethod);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#FF982A] to-white px-4">
      {/* Header */}
      <div className="flex items-center p-4 sticky top-5">
        <Link href="/dashboard-penjual" passHref>
          <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="text-4xl font-bold mx-auto text-blue-700">Pembayaran</h1>
      </div>

      <div className="flex justify-center items-center h-full">
        {/* Outer box with background opacity */}
        <div className="w-full max-w-md p-6 bg-white bg-opacity-70 rounded-xl shadow-md">
          <div className="mb-4">
            <h2 className="font-semibold text-blue-700 mb-2">Daftar Menu:</h2>
            <ul>
              <li>~ Ayam Geprek : 15.000</li>
              <li>~ Teh Leci : 5.000</li>
            </ul>
            <p className="font-bold text-xl text-blue-700 mt-2">SubTotal : Rp 20.000</p>
          </div>

          {!isPreOrder ? (
            <button
              onClick={() => setIsPreOrder(true)}
              className="w-full py-2 bg-white text-blue-700 font-bold rounded-full shadow-2xl border-2 mb-6 border-gray-300 transition"
            >
              Pre-Order
            </button>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="pickupTime" className="block text-sm font-medium">
                  Pilih Jam:
                </label>
                <input
                  type="time"
                  id="pickupTime"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <button
                onClick={() => {
                  setIsPreOrder(false);
                  setPickupTime("");
                }}
                className="w-full py-2 bg=white border border-1 border-red-500 text-red-500 font-bold rounded-full transition"
              >
                Batalkan Pre-Order
              </button>
            </div>
          )}

          <div className="mt-6 mb-14">
            <h2 className="font-semibold">Antar pesanan:</h2>
            <div className="flex items-center space-x-2 mt-2">
              <input type="checkbox" id="diambil" />
              <label htmlFor="diambil">Pesan Diambil</label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input type="checkbox" id="dianter" />
              <label htmlFor="dianter">Pesan Diantar</label>
            </div>
          </div>

          <div className="mt-6 mb-[65px]">
            <h2 className="font-semibold">Metode Pembayaran:</h2>
            <div className="flex justify-center space-x-12 mt-2">
              <button
                className={`px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition ${selectedPaymentMethod === 'COD QRIS' ? 'bg-blue-300' : ''}`}
                onClick={() => setSelectedPaymentMethod('COD QRIS')}
              >
                COD QRIS
              </button>
              <button
                className={`px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition ${selectedPaymentMethod === 'COD Tempat' ? 'bg-blue-300' : ''}`}
                onClick={() => setSelectedPaymentMethod('COD Tempat')}
              >
                COD Tempat
              </button>
            </div>
          </div>

          <div className="mt-4">
            <select className="w-full p-2 border rounded-lg">
              <option value="">Diantar Kemana</option>
              <option value="rumah">Gardu</option>
              <option value="kantor">Lab Game</option>
              <option value="kantor">Lab Komputer</option>
              <option value="kantor">Aula</option>
              <option value="kantor">Tendik</option>
            </select>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handlePesanClick}
              className="w-1/2 mt-6 py-2 bg-white border border-1 border-gray-400 shadow-xl text-blue-700 font-bold rounded-lg transition"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Validation */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-80 p-6 rounded-lg shadow-lg text-center">
            <Image src="/svg/validasi.svg" alt="Validation" width={640} height={475} />
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
