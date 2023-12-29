import { getClient } from '@/api/_db/mongodb';
import { Blog } from '@/types/server/blog';

async function findBlogByDate(date: string): Promise<Blog[]> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      'postings.registerDate': date,
    };

    const result = await client
      .db('yalloo')
      .collection('blog')
      .find<Blog>(query)
      .toArray();

    return result;
  } finally {
    await client.close();
  }
}

export { findBlogByDate };
