import { getClient } from '@/api/_db/mongodb';
import { Posting } from '@/types/client/blog';

async function findById(
  blogId: string,
  postingId: string
): Promise<Posting | null> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      id: blogId,
      'postings.id': postingId,
    };

    const filter = {
      
    }

    const result = await client
      .db('yalloo')
      .collection('users')
      .findOne<Posting>(query);

    return result;
  } finally {
    await client.close();
  }
}

export { findById };
