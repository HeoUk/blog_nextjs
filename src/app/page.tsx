import { redirect } from 'next/navigation';
import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import ModernLoginView from '@/shared-comps/login/modern-login-view';

export default async function Home() {
  //
  const session = await getServerSession(authConfig);

  console.log('Session: ', session);

  if (session) return redirect('/blogs');

  return (
    <div
      style={{
        overflow: 'hidden',
        marginLeft: '40%',
        marginRight: '40%',
        marginTop: '15%',
      }}
    >
      <ModernLoginView />
    </div>
  );
}
