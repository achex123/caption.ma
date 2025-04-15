import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    '/',
    '/landing',
    '/chat',
    '/chat/:id',
    '/api/:path*',
    '/login',
    '/register',
  ],
};
