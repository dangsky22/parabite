import { db } from '@/lib/firebase/config';
import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDocs,
   query,
   where,
} from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req) {
   try {
      const {
         penjualId,
         nama,
         deskripsi,
         nilaiGizi,
         totalGizi,
         level,
         kategori,
         harga,
         image, // Tambahkan validasi untuk gambar
      } = await req.json();

      if (
         !penjualId ||
         !nama ||
         !deskripsi ||
         !nilaiGizi ||
         !totalGizi ||
         !level ||
         !kategori ||
         !harga ||
         !image // Pastikan gambar disertakan
      ) {
         return new NextResponse(
            JSON.stringify({ error: 'Semua field wajib diisi' }),
            { status: 400 }
         );
      }

      const validLevels = ['tidak pedas', 'sedang', 'pedas', 'pedas banget'];
      if (!validLevels.includes(level)) {
         return new NextResponse(
            JSON.stringify({ error: 'Level pedas tidak valid' }),
            { status: 400 }
         );
      }

      const newMenu = {
         penjualId,
         nama,
         deskripsi,
         nilaiGizi, // Simpan nilaiGizi sebagai objek
         totalGizi,
         level,
         kategori,
         harga, // Tambahkan harga ke dokumen menu
         image, // Tambahkan field gambar
         createdAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, 'menu'), newMenu);

      return new NextResponse(
         JSON.stringify({
            message: 'Menu berhasil ditambahkan!',
            id: docRef.id,
         }),
         { status: 201 }
      );
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      });
   }
}

export async function GET(req) {
   try {
      const url = new URL(req.url);
      const penjualId = url.searchParams.get('penjualId');

      if (!penjualId) {
         return new NextResponse(
            JSON.stringify({
               error: 'Penjual ID harus disertakan dalam query',
            }),
            { status: 400 }
         );
      }

      const menuRef = collection(db, 'menu');
      const q = query(menuRef, where('penjualId', '==', penjualId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
         return new NextResponse(
            JSON.stringify({
               message: 'Tidak ada menu ditemukan untuk penjual ini.',
            }),
            { status: 404 }
         );
      }

      const menus = [];
      querySnapshot.forEach((doc) => {
         menus.push({ id: doc.id, ...doc.data() });
         console.log(doc.data());
      });

      return new NextResponse(
         JSON.stringify({ message: 'Menu berhasil diambil!', menus }),
         { status: 200 }
      );
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      });
   }
}

export async function DELETE(req) {
   try {
      const url = new URL(req.url);
      const uid = url.searchParams.get('uid');

      if (!uid) {
         return new NextResponse(
            JSON.stringify({
               error: 'UID menu harus disertakan dalam query. Dapatkan dari ID di GET list menu.',
            }),
            { status: 400 }
         );
      }

      const menuDocRef = doc(db, 'menu', uid);

      await deleteDoc(menuDocRef);

      return new NextResponse(
         JSON.stringify({
            message: `Menu dengan UID ${uid} berhasil dihapus.`,
         }),
         { status: 200 }
      );
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      });
   }
}
