import { getClient } from '@/api/_db/mongodb';
import { Users } from '@/types/server/users';

async function findByEmail(
  email: string
): Promise<Users | null> {
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
