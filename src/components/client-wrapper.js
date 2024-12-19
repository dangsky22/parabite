'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SplashScreen from './splash-screen';

export default function ClientWrapper({ children }) {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    setSplashDone(false);  // Splash screen aktif saat pertama kali halaman dimuat
  }, []);

  const handleSplashComplete = () => {
    setSplashDone(true);  // Splash selesai dan konten utama siap ditampilkan
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: splashDone ? 0 : '100%' }}  // Halaman utama bergerak ke atas atau ke bawah
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="relative"
    >
      {/* Splash Screen di layer atas */}
      <SplashScreen onComplete={handleSplashComplete} />

      {/* Konten Halaman */}
      {splashDone && (
        <motion.div
          initial={{ y: '100%' }}  // Dimulai dari bawah
          animate={{ y: 0 }}  // Bergerak ke atas
          transition={{ duration: 1, ease: 'easeInOut' }}
           
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
