'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import Button from '@mui/material/Button';
import { RouterLink } from '@/routes/components';
import { paths } from '@/routes/paths';

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <Button
      fullWidth
      color='inherit'
      size='large'
      variant='contained'
      onClick={handleClick}
      startIcon={
        <Image
          src={'/logo/google.png'}
          alt='Google Logo'
          width={20}
          height={20}
        />
      }
    >
      Continue with Google
    </Button>
  );
}

export function CredentialsSignInButton() {
  const handleClick = () => {
    signIn();
  };

  return (
    <Button
      fullWidth
      color='inherit'
      size='large'
      variant='soft'
      onClick={handleClick}
    >
      Continue with Email
    </Button>
  );
}
