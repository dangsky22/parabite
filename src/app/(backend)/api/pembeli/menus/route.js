// app/api/menu/route.js
import { db } from '@/lib/firebase/config'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function GET(req) {
   try {
      const url = new URL(req.url)
      const penjualId = url.searchParams.get('penjualId') // Memperbaiki penggunaan variabel 'uid' dalam query string
      if (!uid) {
         return new NextResponse(
            JSON.stringify({
               error: 'UID penjual harus disertakan dalam query',
            }),
            { status: 400 }
         )
      }

      // Ambil nama penjual berdasarkan UID
      const penjualRef = doc(db, 'users', penjualId)
      const penjualDoc = await getDoc(penjualRef)

      if (!penjualDoc.exists()) {
         return new NextResponse(
            JSON.stringify({ error: 'Penjual tidak ditemukan' }),
            { status: 404 }
         )
      }

      const penjualData = penjualDoc.data()
      const penjualName = penjualData?.fullName

      // Ambil menu yang terkait dengan penjual (filter berdasarkan penjualId)
      const menuRef = collection(db, 'menu')
      const q = query(menuRef, where('penjualId', '==', uid)) // Menambahkan filter berdasarkan penjualId
      const querySnapshot = await getDocs(q)
      const menu = []

      querySnapshot.forEach((doc) => {
         menu.push({ id: doc.id, ...doc.data() })
      })

      return new NextResponse(
         JSON.stringify({
            message: 'Menu berhasil ditemukan',
            penjualName, // Mengirimkan nama penjual bersama dengan menu
            menu,
         }),
         { status: 200 }
      )
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      })
   }
}
