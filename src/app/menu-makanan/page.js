import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className =
      "flex justify-center items-center min-h-screen bg-gray-100";
    document.body.appendChild(container);

    const card = document.createElement("div");
    card.className = "w-full max-w-sm p-6 bg-white rounded-lg shadow-md";
    container.appendChild(card);

    // Tambahkan elemen lain ke dalam card...
  }, []);

  return null; // Halaman akan diisi dengan elemen yang ditambahkan di `useEffect`
}

export default function LoginPage() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex justify-center items-center">
      {/* Container Login */}
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md">
        {/* Ilustrasi */}
        <div className="flex justify-center mb-6">
          <Image
            src="/svg/login-illustration.svg" // Ubah path ilustrasi Anda
            alt="Login Illustration"
            width={150}
            height={150}
            className="w-36 h-auto"
          />
        </div>

        {/* Form Login */}
        <form className="space-y-4">
          {/* Input Email/Username */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email/Username
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email or username"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          {/* Input Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Login
          </button>
        </form>

        {/* Teks Create Account */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-yellow-500 hover:underline">
            Create Account
          </a>
        </p>

        {/* Divider OR */}
        <div className="flex items-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Tombol Login Sosial Media */}
        <div className="flex justify-center space-x-4">
          {/* Facebook */}
          <button className="p-2 bg-blue-600 rounded-full">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* Google */}
          <button className="p-2 bg-white border border-gray-300 rounded-full">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* Apple */}
          <button className="p-2 bg-black rounded-full">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
              alt="Apple"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}