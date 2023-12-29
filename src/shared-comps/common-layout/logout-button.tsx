import Iconify from '@/components/blogs/iconify';
import IconButton from '@mui/material/IconButton';
import { signOut, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

export function LogoutButton() {
  //
  const router = useRouter();
  const session = useSession();
  return (
    <IconButton
      onClick={() => {
        signOut();
        router.replace('/');
        session.update(null);
      }}
    >
      <Iconify icon='material-symbols:logout' />
    </IconButton>
  );
}
