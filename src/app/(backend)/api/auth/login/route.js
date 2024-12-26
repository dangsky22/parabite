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

      const idToken = await userCredential.user.getIdToken()
      const userCliams = await userCredential.user.getIdTokenResult()
      const role = userCliams.claims.role || 'pembeli'

      const isProduction = process.env.NODE_ENV === 'production'
      const cookie = `firebase_token=${idToken}; HttpOnly; ${
         isProduction ? 'Secure;' : ''
      } SameSite=Strict; Max-Age=${30 * 24 * 60 * 60}; Path=/`

      return new NextResponse(
         JSON.stringify({ message: 'Login Successful', token: idToken, role }),
         {
            status: 200,
            headers: {
               'Content-Type': 'application/json',
               'Set-Cookie': cookie,
            },
         }
      )
   } catch (error) {
      return new NextResponse(
         JSON.stringify({
            message: 'Login failed',
            error: 'invalid credential or server error',
         }),
         {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
         }
      )
   }
}
