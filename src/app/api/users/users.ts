/**
 * Collection: users
 *
 * ID 는 이메일로 사용자 간 중복을 허용하지 않음.
 */

import { getClient } from '@/_db/mongodb';
import { Users } from '@/types/server/users';
import { Session } from 'next-auth';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import dayjs from 'dayjs';

async function createUser(
  email: string,
  name: string,
  nickname: string,
  password: string,
  createdType: 'db' | 'social'
) {
  //
  const client = await getClient();

  try {
    await client.connect();
    let encryptedPw = null;

    if (createdType === 'db') {
      encryptedPw = bcrypt.hashSync(password, 2);
    }

    const query = {
      id: uuidv4(),
      email,
      name,
      nickname,
      password: encryptedPw,
      createdType,
      createdAt: dayjs().format('YYYY-MM-DD'),
    };

    const result = await client
      .db('yalloo')
      .collection('users')
      .insertOne(query);

    return result ? result : null;
  } finally {
    await client.close();
  }
}

/* 소셜 로그인 시 계정동기화: 없으면 자동 동록, 있으면 사용자 정보 리턴 */
export async function synchorinizeAccount(session: Session) {
  //
  const name = session.user?.name;
  const email = session.user?.email;
  const image = session.user?.image;

  if (!email) return null;

  findByEmail(email).then((foundUser) => {
    if (!foundUser) {
      createUser(
        email,
        name ?? '',
        'User' + dayjs().millisecond(),
        '',
        'social'
      );
    }
  });
}

/* 로그인시 이메일 검증용 이메일 조회 */
async function findByEmail(email: string): Promise<Users | null> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      email,
    };

    const result = await client
      .db('yalloo')
      .collection('users')
      .findOne<Users>(query);

    return result ? result : null;
  } finally {
    await client.close();
  }
}

export { findByEmail };
