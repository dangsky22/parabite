import { NextResponse } from 'next/server'

export async function POST(req) {
   try {
      const cookies = req.cookies
      const token = cookies?.get('firebase_token')

      if (!token) {
         return new NextResponse(
            JSON.stringify({
               message: 'You are already logged out. Please log in to continue.',
            }),
            {
               status: 400,
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      const isProduction = process.env.NODE_ENV === 'production'
      const cookie = `firebase_token=; HttpOnly; ${
         isProduction ? 'Secure;' : ''
      } SameSite=Strict; Max-Age=0; Path=/`

      return new NextResponse(
         JSON.stringify({
            message: 'Logout successful',
         }),
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
            message: 'Logout failed',
            error: error.message,
         }),
         {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
         }
      )
   }
}
