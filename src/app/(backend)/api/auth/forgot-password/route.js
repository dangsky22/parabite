import { auth } from '@/lib/firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'
import { NextResponse } from 'next/server'

export async function POST(req) {
   try {
      const { email } = await req.json()

      if (!email || typeof email !== 'string') {
         return new NextResponse(
            JSON.stringify({ error: 'Email tidak valid' }),
            { status: 400 }
         )
      }

      await sendPasswordResetEmail(auth, email)
      return new NextResponse(
         JSON.stringify({
            message: 'Email reset password telah dikirim',
         }),
         { status: 200 }
      )
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 400,
      })
   }
}
