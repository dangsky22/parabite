import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
        <form className="flex flex-col gap-4">
            <span className="text-black text-medium font-semibold"> Nama Lengkap </span>
          <input
            type="text"
            className="border border-black-300 rounded-[10px] p-2 w-full"
          />
           <span className="text-black text-medium font-semibold"> Email </span>
          <input
            type="email"
            className="border border-gray-300 rounded-[10px] p-2 w-full"    
          />
           <span className="text-black text-medium font-semibold"> No. Handphone </span>
          <input
            type="text"
            className="border border-gray-300 rounded-[10px] p-2 w-full"    
          />
           <span className="text-black text-medium font-semibold"> Create Password </span>
          <input
            type="password"
            className="border border-gray-300 rounded-[10px] p-2 w-full"    
          />
           <span className="text-black text-medium font-semibold"> Confirm Your Password</span>
          <input
            type="password"
            className="border border-gray-300 rounded-[10px] p-2 w-full"    
          />

          <button
            type="submit"
            className="bg-[#E48621] text-white py-2 rounded-[8px] font-semibold mt-4 w-[164px] h-[48px] mx-auto"
          >
            Buat Akun
          </button>
        </form>
      </div>
    </div>
  );
}
