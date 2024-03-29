import {createCollection, getClient} from '@/_db/mongodb';
import { Posting } from '@/types/client/posting';

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


async function registerPostingOne (posting: Posting) {
  const client = await getClient();

  try {
    await client.db('yalloo').collection('posting')
        .insertOne(posting, { });
  } finally {
    await client.close();
  }
}

export { findById,  registerPostingOne};
