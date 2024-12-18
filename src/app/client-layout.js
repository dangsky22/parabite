'use client';
import Navbar from '@/components/ui/navbar';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathName = usePathname();
  const NavbarPages = ['/dashboard', '/menu-makanan', '/menu-minuman'];
  return (
    <section>
      {children}
      {NavbarPages.includes(pathName) && <Navbar />}
    </section>
  );
}
