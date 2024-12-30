'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAuthStore from "../stores/authStores"; // Mengimpor auth store
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const setIdToken = useAuthStore((state) => state.setIdToken); // Mendapatkan fungsi setIdToken dari store
  const setPenjualId = useAuthStore((state) => state.setPenjualId); // Mendapatkan fungsi setPenjualId

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      console.log("Response Data:", response.data);

      const { idToken, role, penjualId } = response.data;

      setIdToken(idToken); // Menyimpan idToken ke store

      // Menyimpan penjualId, jika role penjual, set penjualId default
      if (role === "penjual") {
        setPenjualId(penjualId || "arclGGg5WGMLArdaDLUGYn654Io1"); // Menyimpan penjualId atau nilai default
        router.push("/dashboard-penjual");
      } else if (role === "pembeli") {
        router.push("/dashboard-pembeli");
      } else {
        setError("Role tidak dikenali.");
      }
    } catch (err) {
      setError("Login gagal. Periksa email dan password Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#FC982D]">
      <Image
        src="/svg/login-page.svg"
        alt="login page"
        width={440}
        height={956}
        className="mx-auto"
      />
      <div className="absolute top-[360px] w-[250px] max-w-[350px] px-[57px]">
        <div className="relative my-4">
          <Image
            src="/svg/icon-user.svg"
            alt="icon user"
            width={23}
            height={30}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          <input
            required
            type="email"
            placeholder="Masukan Email/Username"
            className="py-[16px] pl-[45px] pr-[30px] rounded-[32px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative mt-2 mb-2">
          <Image
            src="/svg/icon-pw.svg"
            alt="icon password"
            width={23}
            height={30}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          <input
            required
            type="password"
            placeholder="Masukan Password"
            className="py-[16px] pl-[45px] pr-[30px] rounded-[32px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <span className="text-white text-regular pl-[15px] text-base">Create</span>
          <Link href="#">
            <span className="pl-1 text-white hover:underline font-bold text-base">
              Account
            </span>
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`absolute top-[570px] mx-[100px] item-center w-[172px] h-[40px] ${
            loading ? "bg-gray-400" : "bg-white"
          } text-[#FC982D] font-medium text-[24px] rounded-[32px]`}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="flex justify-center gap-10 mt-[-80px]">
        <Link href="#">
          <Image src="/svg/icon-fb.svg" alt="icon facebook" width={48} height={48} />
        </Link>
        <Link href="#">
          <Image src="/svg/icon-google.svg" alt="icon google" width={48} height={48} />
        </Link>
        <Link href="#">
          <Image src="/svg/icon-ip.svg" alt="icon apple" width={48} height={48} />
        </Link>
      </div>
    </div>
  );
}
