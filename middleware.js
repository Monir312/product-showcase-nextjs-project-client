import { NextResponse } from 'next/server';

export function middleware(request) {
// Get login cookie
const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

if (!isLoggedIn) {
return NextResponse.redirect(new URL('/auth/login', request.url));
}

return NextResponse.next();
}

export const config = {
matcher: [
'/add-product/:path*',
'/manage-products/:path*',
'/products/:path*'
],
};
