import { db } from '@/lib/firebase/config'
import { adminAuth } from '@/lib/firebase/config-admin'
import { collection, doc, getDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function GET(req) {
   try {
      const authHeader = req.headers.get('Authorization')
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
         return new NextResponse(
            JSON.stringify({
               message:
                  'Token tidak ditemukan atau tidak valid. Anda belum login.',
            }),
            {
               status: 400,
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      const token = authHeader.split(' ')[1]

      const decodedToken = await adminAuth.verifyIdToken(token)
      const uid = decodedToken.uid
      const role = decodedToken.role 
      console.log(uid)
      console.log('Decoded Token:', decodedToken) 

      if (role !== 'pembeli') {
         return new NextResponse(
            JSON.stringify({
               message: 'Akses ditolak. Anda bukan pembeli.',
            }),
            {
               status: 403,
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      // Mengambil data pengguna dari Firestore
      const userRef = doc(db, 'users', uid)
      const userDoc = await getDoc(userRef)

      if (!userDoc.exists()) {
         return new NextResponse(
            JSON.stringify({
               message: 'Pengguna tidak ditemukan.',
            }),
            {
               status: 404,
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      const userData = userDoc.data()

      return new NextResponse(
         JSON.stringify({
            message: 'Data pengguna berhasil diambil',
            data: userData,
         }),
         {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
         }
      )
   } catch (error) {
      console.log('Error:', error.message) // Debugging output
      return new NextResponse(
         JSON.stringify({
            message: 'Error fetching user data',
            error: error.message,
         }),
         {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
         }
      )
   }
}
