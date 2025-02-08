import { NextResponse, NextRequest } from "next/server";
// import { auth } from "@/auth";

// const protectedRoutes = ["/cart","/orders"]

export default async function middleware(req: NextRequest) {
    //     const session = await auth()
    const { pathname } = req.nextUrl
    console.log(pathname);

    //     const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))
    //     if (isProtected && !session) {
    //         return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    //     }
    return NextResponse.next()
}

