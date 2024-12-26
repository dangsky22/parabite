import Image from "next/image";
import Link from "next/link";

export default function StatusPembayaran() {
  const orders = [
    {
      id: 19,
      name: "Dang",
      items: [
        { name: "Korean Chicken", quantity: 1 },
        { name: "Es Lemon Tea", quantity: 1 },
      ],
      total: "Rp. 20.000",
      payment: "CASH",
      status: "Lunas",
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
      status: "Lunas",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-[#E48621] py-4 rounded-b-3xl px-6 flex items-center text-white ">
        <Link href="dashboard-penjual" passhref>
        <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="ml-4 font-bold text-xl">Status Pembayaran</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-xl shadow-xl mb-4 w-[320px] h-[auto]"
          >
            <h2 className="font-bold text-xl text-[#474747]">
              {order.id} | {order.name}
            </h2>
            <hr className="my-2 border-black border border-5" />
            <div>
              <p className="font-medium text-sm text-[#474747]">Pesanan</p>
              <ul className="text-sm text-[#474747]">
                {order.items.map((item, index) => (
                  
                  <li className="flex text-sm justify-between items-center" key={index}>
                    <span>{item.name} </span>
                    <span>x{item.quantity}</span>
                  </li>
                  
                ))}
              </ul>
              <div className="mt-2">
                <div className="flex "> 
                <p className="font-medium text-sm text-[#474747]">
                  Total: 
                </p>
                <p className="font-bold text-right flex-1 justify-end">{order.total}</p>
                </div>
                <p className="text-sm text-[#474747]">{order.payment}</p>
              </div>
            </div>
            <div className=" flex justify-center items-center">
            <button className="bg-green-500 text-white font-medium text-xl py-[12px] px-[57px] rounded-md mt-3">
              {order.status}
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
