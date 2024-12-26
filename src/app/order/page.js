"use client";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";

export default function PesananKonfirmasi() {
  // State data pesanan
  const [orders, setOrders] = useState({
    Konfirmasi: [
      {
        id: 19,
        name: "Dang",
        items: [
          { name: "Korean Chicken", quantity: 1 },
          { name: "Es Lemon Tea", quantity: 1 },
        ],
        total: "Rp. 20.000",
        payment: "CASH",
      },
      {
        id: 20,
        name: "Annisa Rachimi R",
        items: [
          { name: "Nasi Ayam Geprek", quantity: 1 },
          { name: "Es Teh", quantity: 1 },
        ],
        total: "Rp. 20.000",
        payment: "QRIS",
      },
    ],
    Diproses: [
      {
        id: 21,
        name: "Budi",
        items: [
          { name: "Mie Ayam", quantity: 1 },
          { name: "Teh Manis", quantity: 1 },
        ],
        total: "Rp. 15.000",
        payment: "CASH",
      },
    ],
    Selesai: [
      {
        id: 22,
        name: "Rina",
        items: [
          { name: "Soto Ayam", quantity: 1 },
          { name: "Es Jeruk", quantity: 1 },
        ],
        total: "Rp. 25.000",
        payment: "QRIS",
      },
    ],
  });

  // Fungsi untuk memindahkan pesanan ke tab Diproses
  const handleConfirm = (orderId) => {
    setOrders((prevOrders) => {
      // Temukan pesanan berdasarkan ID
      const orderToMove = prevOrders.Konfirmasi.find(
        (order) => order.id === orderId
      );

      // Update data pesanan
      return {
        Konfirmasi: prevOrders.Konfirmasi.filter(
          (order) => order.id !== orderId
        ),
        Diproses: [...prevOrders.Diproses, orderToMove],
        Selesai: [...prevOrders.Selesai],
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-[#E48621] py-4 rounded-b-3xl px-10  flex items-center text-white">
        <Link href="dashboard-penjual" passHref>
          <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="ml-4 font-bold text-xl pl-14">Pesanan</h1>
      </div>

      {/* Tabs */}
      <Tabs>
        <TabList className="flex justify-around bg-white py-2 text-center text-[#474747] font-medium">
          <Tab
            className="w-1/3 cursor-pointer focus:outline-none"
            selectedClassName="border-b-4 border-[#E48621]"
          >
            Konfirmasi
          </Tab>
          <Tab
            className="w-1/3 cursor-pointer focus:outline-none"
            selectedClassName="border-b-4 border-[#E48621]"
          >
            Diproses
          </Tab>
          <Tab
            className="w-1/3 cursor-pointer focus:outline-none"
            selectedClassName="border-b-4 border-[#E48621]"
          >
            Selesai
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <OrderList orders={orders.Konfirmasi} onConfirm={handleConfirm} />
        </TabPanel>
        <TabPanel>
          <OrderList orders={orders.Diproses} />
        </TabPanel>
        <TabPanel>
          <OrderList orders={orders.Selesai} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

// Komponen untuk daftar pesanan
function OrderList({ orders, onConfirm }) {
  return (
    <div className="px-6 py-4">
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4 w-full"
          >
            <h2 className="font-bold text-xl text-[#474747]">
              {order.id} | {order.name}
            </h2>
            <hr className="my-2 border-gray-300" />
            <div>
              <p className="font-medium text-sm text-[#474747] mb-2">Pesanan</p>
              <ul className="text-sm text-[#474747] mb-2">
                {order.items.map((item, index) => (
                  <li
                    className="flex justify-between items-center"
                    key={index}
                  >
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-2">
                <p className="font-medium text-sm text-[#474747]">Total:</p>
                <p className="font-bold text-[#474747]">{order.total}</p>
              </div>
              <p className="text-sm text-[#474747]">{order.payment}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="border border-gray-400 text-gray-700 font-medium text-sm py-2 px-4 rounded-md">
                Lihat Detail
              </button>
              {onConfirm && (
                <button
                  className="border border-gray-400 text-gray-700 font-medium text-sm py-2 px-4 rounded-md"
                  onClick={() => onConfirm(order.id)}
                >
                  Konfirmasi
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Tidak ada pesanan.</p>
      )}
    </div>
  );
}
