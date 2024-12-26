import { db, auth } from '@/lib/firebase/config'
import { adminAuth } from '@/lib/firebase/config-admin'
import {
   createUserWithEmailAndPassword,
   sendEmailVerification,
} from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function POST(req) {
   try {
      const { username, email, password, role } = await req.json()

      if (role !== 'penjual' && role !== 'pembeli') {
         return new NextResponse(
            JSON.stringify({
               error: "Invalid role. Please select between 'penjual' or 'pembeli'",
            }),
            { status: 400 }
         )
      }
      const userRef = collection(db, 'users')
      const emailQuery = query(userRef, where('email', '==', email))
      const usernameQuery = query(userRef, where('username', '==', username))

      const emailSnapshot = await getDocs(emailQuery)
      const usernameSnapshot = await getDocs(usernameQuery)

      if (!emailSnapshot.empty) {
         return new NextResponse(
            JSON.stringify({
               error: 'Email sudah digunakan oleh pengguna lain',
            }),
            { status: 400 }
         )
      }

      if (!usernameSnapshot.empty) {
         return new NextResponse(
            JSON.stringify({
               error: 'Username sudah di gunakan oleh pengguna lain',
            })
         )
      }

      const userCredential = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      )

      const user = userCredential.user
      await adminAuth.setCustomUserClaims(user.uid, { role })
      await adminAuth.setCustomUserClaims(user.uid, {
         username,
         email,
         role,
      })

      await sendEmailVerification(user)

      return new NextResponse(
         JSON.stringify({
            message: 'Registerasi berhasil! Email verifikasi telah dikirim',
         }),
         { status: 201 }
      )
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      })
   }
}
