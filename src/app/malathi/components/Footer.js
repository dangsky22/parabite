export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md flex justify-between items-center">
        <button>
          <img src="/images/cart-icon.svg" alt="Cart" />
        </button>
        <div className="flex items-center space-x-2">
          <p className="text-gray-600 text-sm">--,--</p>
        </div>
      </footer>
    );
  }
  