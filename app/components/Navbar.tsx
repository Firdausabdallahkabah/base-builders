'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';
import BaseLogo from './BaseLogo';

const NavBar = () => {
  const router = useRouter();
  const { status } = useSession();

  const authenticated = status === 'authenticated';

  return (
    <nav className="px-6 py-4 flex items-center justify-between bg-slate-900 border-b">
      <BaseLogo />

      <div className="flex items-center gap-4">
        {authenticated ? (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => router.push('/dashboard')}
              className="hidden sm:block"
            >
              Dashboard
            </Button>
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        ) : (
          <Button onClick={() => signIn()} className="base-button">
            Get Started
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
