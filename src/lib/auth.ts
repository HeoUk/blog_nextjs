import { NextAuthOptions, User, getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { synchorinizeAccount } from '@/app/api/users/users';
import { Users } from '@/types/server/users';
import bcrypt from 'bcrypt';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        const response = await fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify({ email: credentials.email }),
        });
        const dbUser = await response.json().then((result: Users) => result);

        /** bcrypt 복호화 사용 */
        if (
          dbUser &&
          bcrypt.compareSync(dbUser.password, credentials.password)
        ) {
          const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
          return dbUserWithoutPassword as Users;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

/* 서버 컴포넌트에서 로그인 상태 검증 시 */
export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect('/');
  await synchorinizeAccount(session);
}

/* 클라이언트 컴포넌트에서 로그인 상태 검증 시 */
export function loginIsRequiredClient() {
  if (typeof window !== 'undefined') {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push('/');
    synchorinizeAccount(session as any);
  }
}
