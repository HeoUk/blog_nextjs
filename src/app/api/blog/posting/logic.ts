import { getClient } from '@/_db/mongodb';
import { Posting, gePostingAsClient } from '@/types/client/posting';
import { PostingModel } from '@/types/server/posting-model';
import { getServerSession } from 'next-auth';

async function findById(
  blogId: string,
  postingId: string
): Promise<Posting | null> {
  const client = await getClient();

  try {
    const session = await getServerSession();
    await client.connect();

    const query = {
      blogId: blogId,
      id: postingId,
    };

    const result = await client
      .db('yalloo')
      .collection('posting')
      .findOne<PostingModel>(query);

    if (!result) {
      return null;
    }

    return gePostingAsClient(result, session);
  } finally {
    await client.close();
  }
}

// 최근 등록 포스팅 목록
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
      .find<Posting>(query)
      .toArray();

    return result ? result : [];
  } finally {
    await client.close();
  }
}

// 업데이트
async function update(blogId: string, postingId: string, updates: any) {
  //
  const posting = await findById(blogId, postingId);

  const client = await getClient();

  try {
    await client.connect();

    const query = { blogId, id: postingId };

    let target = Object.assign({}, updates);
    Object.keys(target).map((key) => {
      if (key === 'likes') {
        let clones = [...(posting?.likes ?? [])];
        if (posting?.likes.includes(target[key])) {
          clones = clones.filter((c) => c !== target[key]);
        } else {
          clones.push(target[key]);
        }
        target = { ...target, likes: clones };
      }
    });
    const newvalues = { $set: { ...target } };

    const result = await client
      .db('yalloo')
      .collection('posting')
      .updateOne(query, newvalues);

    return result;
  } finally {
    await client.close();
  }
}

const PostingLogic = {
  findById,
  findRecentPostings,
  update,
};

export default PostingLogic;
