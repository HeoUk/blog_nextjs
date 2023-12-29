import { getClient } from '@/api/_db/mongodb';

async function findAllByPostingId(
  target: string,
  blogId: string,
  postingId: string
): Promise<Comment[]> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      target,
      blogId: blogId,
      targetId: postingId,
    };

    const result = await client
      .db('yalloo')
      .collection('comment')
      .find<Comment>(query)
      .toArray();

    return result ? result : [];
  } finally {
    await client.close();
  }
}

export {findAllByPostingId};
