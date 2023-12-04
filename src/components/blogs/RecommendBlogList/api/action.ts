import { getClient } from '@/app/api/_db/mongodb';
import { Blog } from '../../api/model/Blog';

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
    console.log(result);

    return result;
  } finally {
    await client.close();
  }
}

export { findBlogByDate };
