import { getClient } from '@/api/_db/mongodb';
import { Posting } from '@/types/client/posting';

async function findById(
  blogId: string,
  postingId: string
): Promise<Posting | null> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      blogId: blogId,
      id: postingId,
    };

    const result = await client
      .db('yalloo')
      .collection('posting')
      .findOne<Posting>(query);

    return result ? result : null;
  } finally {
    await client.close();
  }
}

async function findRecentPostings(blogId: string): Promise<Posting[]> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      blogId: blogId,
    };

    const result = await client
      .db('yalloo')
      .collection('posting')
      .find<Posting>(query).toArray();

    return result ? result : [];
  } finally {
    await client.close();
  }
}

export { findById, findRecentPostings };
