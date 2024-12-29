import { db } from '@/lib/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function GET(req) {
   try {
      // Ambil UID dari query string
      const url = new URL(req.url)
      const uid = url.searchParams.get('uid')

      // Periksa apakah UID ada dalam query string
      if (!uid) {
         return new NextResponse(
            JSON.stringify({ error: 'UID penjual harus disertakan dalam query' }),
            { status: 400 }
         )
      }

      // Ambil data penjual dari koleksi "users" berdasarkan UID
      const penjualRef = doc(db, 'users', uid)
      const penjualDoc = await getDoc(penjualRef)

      // Periksa apakah data penjual ditemukan
      if (!penjualDoc.exists()) {
         return new NextResponse(
            JSON.stringify({ error: 'Penjual tidak ditemukan' }),
            { status: 404 }
         )
      }

      // Ambil data penjual dan kirimkan sebagai response
      const penjualData = penjualDoc.data()
      return new NextResponse(
         JSON.stringify({
            message: 'Penjual berhasil ditemukan',
            penjual: penjualData,
         }),
         { status: 200 }
      )
   } catch (error) {
      return new NextResponse(
         JSON.stringify({ error: error.message }),
         { status: 400 }
      )
   }
}
