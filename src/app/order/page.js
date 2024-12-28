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
        schedule: "13:00",
        delivery: "Diantar",
        location: "Prodi DKV",
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
        schedule: "13:30",
        delivery: "Diantar",
        location: "Kantin Kampus",
      },
    ],
    Selesai: [],
  });

  // State untuk modal detail
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fungsi untuk memindahkan pesanan ke tab "Diproses"
  const handleConfirm = (orderId) => {
    setOrders((prevOrders) => {
      const orderToMove = prevOrders.Konfirmasi.find(
        (order) => order.id === orderId
      );
      return {
        Konfirmasi: prevOrders.Konfirmasi.filter(
          (order) => order.id !== orderId
        ),
        Diproses: [...prevOrders.Diproses, orderToMove],
        Selesai: [...prevOrders.Selesai],
      };
    });
  };

  // Fungsi untuk memindahkan pesanan ke tab "Selesai"
  const handleComplete = (orderId) => {
    setOrders((prevOrders) => {
      const orderToMove = prevOrders.Diproses.find(
        (order) => order.id === orderId
      );
      return {
        Konfirmasi: [...prevOrders.Konfirmasi],
        Diproses: prevOrders.Diproses.filter(
          (order) => order.id !== orderId
        ),
        Selesai: [...prevOrders.Selesai, orderToMove],
      };
    });
    setSelectedOrder(null); // Tutup modal setelah selesai
  };

  // Fungsi untuk menutup modal
  const closeModal = () => setSelectedOrder(null);

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-[#E48621] py-4 rounded-b-3xl px-10 flex items-center text-white">
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

        <TabPanel>
          <OrderList
            orders={orders.Konfirmasi}
            onConfirm={handleConfirm}
            onViewDetail={setSelectedOrder}
          />
        </TabPanel>
        <TabPanel>
          <OrderList
            orders={orders.Diproses}
            onViewDetail={setSelectedOrder}
            showChatButton={true}
          />
        </TabPanel>
        <TabPanel>
          <OrderList orders={orders.Selesai} onViewDetail={setSelectedOrder} />
        </TabPanel>
      </Tabs>

      {/* Modal Detail */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
            <h2 className="text-lg font-bold text-center mb-4">
              Detail Pesanan
            </h2>
            <p className="font-bold text-center text-2xl text-blue-500">
              {selectedOrder.id}
            </p>
            <hr className="my-4" />
            <p>Nama Pemesan: {selectedOrder.name}</p>
            <p>
              Pesanan:
              <ul className="list-disc pl-5">
                {selectedOrder.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x{item.quantity}
                  </li>
                ))}
              </ul>
            </p>
            <p>Total: {selectedOrder.total}</p>
            <p>Metode Pembayaran: {selectedOrder.payment}</p>
            <p>Jadwal: {selectedOrder.schedule}</p>
            <p>Jenis Pengantaran: {selectedOrder.delivery}</p>
            <p>Lokasi: {selectedOrder.location}</p>
            <button
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md w-full"
              onClick={closeModal}
            >
              Tutup
            </button>
            {/* Tombol Pesanan Selesai */}
            {orders.Diproses.find((order) => order.id === selectedOrder.id) && (
              <button
                className="mt-4 bg-[#E48621] text-white py-2 px-4 rounded-md w-full"
                onClick={() => handleComplete(selectedOrder.id)}
              >
                Pesanan Selesai
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Komponen untuk daftar pesanan
function OrderList({ orders, onConfirm, onViewDetail, showChatButton }) {
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
            <p className="font-bold text-sm">Total: {order.total}</p>
            <p className="font-bold text-sm">Metode Pembayaran: {order.payment}</p>
            <div className="flex justify-between mt-4">
              <button
                className="border border-gray-400 text-gray-700 font-medium text-sm py-2 px-4 rounded-md"
                onClick={() => onViewDetail(order)}
              >
                Lihat Detail
              </button>
              {showChatButton && (
                <Link href="/message" passHref>
                  <button
                    className="border border-gray-400 text-gray-700 font-medium text-sm py-2 px-4 rounded-md"
                  >
                    Chat
                  </button>
                </Link>
              )}
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
