import { adminAuth } from '@/lib/firebase/config-admin'
import { NextResponse } from 'next/server'

export async function POST(req) {
   try {
      // Ambil token dari header Authorization
      const authHeader = req.headers.get('Authorization')

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
         return new NextResponse(
            JSON.stringify({
               message:
                  'Token tidak ditemukan atau tidak valid. Anda belum login.',
            }),
            {
               status: 400, // Unauthorized
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      // Ekstrak token dari header Authorization
      const token = authHeader.split(' ')[1]

      // Verifikasi token dengan Firebase Admin SDK
      let decodedToken
      try {
         decodedToken = await adminAuth.verifyIdToken(token)
      } catch (error) {
         return new NextResponse(
            JSON.stringify({
               message: 'Token tidak valid atau sudah kedaluwarsa.',
               error: error.message,
            }),
            {
               status: 401, // Unauthorized
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }

      // Ambil UID dari decodedToken
      const uid = decodedToken.uid

      // Revoke refresh tokens untuk UID tersebut
      try {
         // Mencabut refresh token untuk UID
         await adminAuth.revokeRefreshTokens(uid)

         // Kembalikan respons bahwa logout berhasil dan token sudah kedaluwarsa
         return new NextResponse(
            JSON.stringify({
               message:
                  'Logout berhasil. Token telah kedaluwarsa dan tidak valid.',
            }),
            {
               status: 200,
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         )
      } catch (error) {
         return new NextResponse(
            JSON.stringify({
               message: 'Gagal mencabut refresh token.',
               error: error.message,
            }),
            {
               status: 500, // Internal Server Error
               headers: { 'Content-Type': 'application/json' },
            }
         )
      }
   } catch (error) {
      return new NextResponse(
         JSON.stringify({
            message: 'Terjadi kesalahan pada server.',
            error: error.message,
         }),
         {
            status: 500, // Internal Server Error
            headers: { 'Content-Type': 'application/json' },
         }
      )
   }
}
