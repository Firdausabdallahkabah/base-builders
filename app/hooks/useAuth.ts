// lib/useAuth.ts
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const authenticated = status === 'authenticated';

  return {
    user,
    authenticated,
    loading: status === 'loading',
    login: () => signIn('google'),
    logout: () => signOut(),
  };
};
