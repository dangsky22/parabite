import { db, auth } from '@/lib/firebase/config'
import { adminAuth } from '@/lib/firebase/config-admin'
import {
   createUserWithEmailAndPassword,
   sendEmailVerification,
} from 'firebase/auth'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function POST(req) {
   try {
      const {
         fullname,
         email,
         phone,
         password,
         confirmPassword,
         namaKantin,
         noKantin,
      } = await req.json()

      if (
         !fullname ||
         !email ||
         !phone ||
         !password ||
         !confirmPassword ||
         !namaKantin ||
         !noKantin
      ) {
         return new NextResponse(
            JSON.stringify({ error: 'Semua field wajib diisi' }),
            { status: 400 }
         )
      }

      if (password !== confirmPassword) {
         return new NextResponse(
            JSON.stringify({
               error: 'Password dan Konfirmasi Password tidak cocok',
            }),
            { status: 400 }
         )
      }

      const userRef = collection(db, 'users')
      const emailQuery = query(userRef, where('email', '==', email))
      const phoneQuery = query(userRef, where('phone', '==', phone))

      const emailSnapshot = await getDocs(emailQuery)
      const phoneSnapshot = await getDocs(phoneQuery)

      if (!emailSnapshot.empty) {
         return new NextResponse(
            JSON.stringify({
               error: 'Email sudah digunakan oleh pengguna lain',
            }),
            { status: 400 }
         )
      }

      if (!phoneSnapshot.empty) {
         return new NextResponse(
            JSON.stringify({
               error: 'Nomor telepon sudah digunakan oleh pengguna lain',
            }),
            { status: 400 }
         )
      }

      const userCredential = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      )

      const user = userCredential.user

      await adminAuth.setCustomUserClaims(user.uid, { role: 'penjual' })

      const userData = {
         fullname,
         email,
         phone,
         role: 'penjual',
         namaKantin,
         noKantin,
         createdAt: new Date().toISOString(),
      }

      await addDoc(userRef, { ...userData, uid: user.uid })
      await sendEmailVerification(user)

      return new NextResponse(
         JSON.stringify({
            message: 'Registrasi berhasil! Email verifikasi telah dikirim',
         }),
         { status: 201 }
      )
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      })
   }
}
