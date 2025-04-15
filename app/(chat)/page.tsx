'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/chat');
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500 border-r-2 border-b-2 border-gray-800 mx-auto mb-4" />
        <p className="text-sm text-gray-400">Redirecting...</p>
      </div>
    </div>
  );
}
