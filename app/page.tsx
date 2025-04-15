import { redirect } from 'next/navigation';
import { auth } from './(auth)/auth';

export default async function RootPage() {
  const session = await auth();

  if (session?.user) {
    // User is authenticated, redirect to chat
    // Add a query param to avoid potential redirect loops
    return redirect('/chat?from=root');
  } else {
    // User is not authenticated, show landing page
    return redirect('/landing');
  }
}
