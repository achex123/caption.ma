import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/chat',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnChat = nextUrl.pathname.startsWith('/chat');
      const isOnRegister = nextUrl.pathname.startsWith('/register');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const isOnLanding = nextUrl.pathname.startsWith('/landing');
      const isOnRoot = nextUrl.pathname === '/';

      // Always redirect authenticated users from auth pages to chat
      if (isLoggedIn && (isOnLogin || isOnRegister || isOnLanding)) {
        return Response.redirect(new URL('/chat', nextUrl as unknown as URL));
      }

      // Always allow access to register and login pages for unauthenticated users
      if (isOnRegister || isOnLogin) {
        return true;
      }

      // Special case for landing page - allow access to unauthenticated users
      if (isOnLanding) {
        return true;
      }

      // For chat pages, require authentication
      if (isOnChat) {
        if (isLoggedIn) return true;
        return Response.redirect(
          new URL('/landing', nextUrl as unknown as URL),
        );
      }

      // For the root path, let the page.tsx handle the redirect logic
      if (isOnRoot) {
        return true;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
