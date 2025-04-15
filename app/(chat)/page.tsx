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
        <div className="animate-spin size-12 border-y-2 border-orange-500 border-r-2 border-l-2 border-gray-800 rounded-full mx-auto mb-4" />
        <p className="text-sm text-gray-400">Redirecting...</p>
      </div>
    </div>
  );
}
