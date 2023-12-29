import { getClient } from '@/api/_db/mongodb';
import { Posting } from '@/types/client/blog';

async function findById(
  blogId: string,
  postingId: string
): Promise<Posting | null> {
  const client = await getClient();

  try {
    await client.connect();

    var query = {
      blogId: blogId,
      'postings.id': postingId,
    };
    console.log('HHHHHHHHERERRERE');
    const result = await client
      .db('yalloo')
      .collection('blog')
      .findOne<{ _id: string; postings: Posting[] }>(query, {
        projection: { postings: { $elemMatch: { id: '1' } } },
      });

    return result?.postings[0] ?? null;
  } finally {
    await client.close();
  }
}

export { findById };
