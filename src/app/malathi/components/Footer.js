import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white border-1 border-gray-400 border-t-2 flex justify-center items-center w-[430px] h-[95px]">
      {/* Button Wrapper */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 shadow-2xl rounded-full w-[300px] h-auto flex items-center justify-between px-8">
        {/* Image on the left */}
        <Image
          src="/svg/cart.svg"
          alt="Darna Cafe"
          width={30}
          height={30}
          className="object-cover rounded-lg"
        />
        {/* Text in the center */}
        <p className="text-white text-xl font-medium text-center flex-grow">
          --,--
        </p>
      </div>
    </footer>
  );
}
