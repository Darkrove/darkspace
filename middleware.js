import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"


export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname
        const token = await getToken({ req })
        const isAuth = !!token
        const isAuthPage = pathname.startsWith("/signin")
        const sensitveRoutes = ['/dashboard', '/dashboard/profile', '/dashboard/files',
            '/dashboard/host', '/dashboard/photos', '/dashboard/recent',
            '/dashboard/uploadmedia', '/dashboard/video', '/dashboard/show', '/dashboard/show/[slug]']
        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL('/dashboard', req.url))
            }
            return null
        }

        if (!isAuth && sensitveRoutes.some((route) => pathname.startsWith(route))) {
            return NextResponse.redirect(new URL('/signin', req.url))
        }
    }, {
    callbacks: {
        async authorized() {
            return true
        }
    }
}
)

export const config = {
    matcher: ['/', '/signin', '/dashboard/:path*']
}