'use client';
import Navbar from '@/components/ui/navbar';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathName = usePathname();
  const NavbarPages = ['/dashboard-pembeli', '/dashboard-penjual', '/menu-makanan', '/menu-minuman','/menu-favorite','/status-pembayaran', '/order','/kelola-menu', '/profil'];
  return (
    <section>
      {children}
      {NavbarPages.includes(pathName) && <Navbar />}
    </section>
  );
}
