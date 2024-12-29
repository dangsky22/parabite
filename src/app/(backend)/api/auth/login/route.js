import { auth } from '@/lib/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextResponse } from 'next/server'

export async function POST(req) {
   try {
      const { email, password } = await req.json()

      if (
         !email ||
         !password ||
         typeof email !== 'string' ||
         typeof password !== 'string'
      ) {
         return new NextResponse(
            JSON.stringify({ message: 'Invalid email or password' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
         )
      }

      const userCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password
      )

      const user = userCredential.user
      if (!user.emailVerified) {
         return new NextResponse(
            JSON.stringify({
               message: 'Email belum diverifikasi. Silakan verifikasi email Anda terlebih dahulu.',
            }),
            {
               status: 403, 
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      
      const idToken = await user.getIdToken()
      const userClaims = await user.getIdTokenResult()
      const role = userClaims.claims.role || 'pembeli' 

     
      return new NextResponse(
         JSON.stringify({
            message: 'Login Successful',
            role,
            idToken,
         }),
         {
            status: 200,
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${idToken}`, 
            },
         }
      )
   } catch (error) {
      return new NextResponse(
         JSON.stringify({
            message: 'Login failed',
            error: error.message || 'Invalid credentials or server error',
         }),
         {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
         }
      )
   }
}
