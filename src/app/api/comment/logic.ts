import { getClient } from '@/_db/mongodb';
import { authConfig, loginIsRequiredServer } from '@/utils/auth';
import { Comment, CommentReply } from '@/types/client/comment';
import { getServerSession } from 'next-auth/next';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

/**
 *  Comment DB Access & Logics
 *
 * -- Methods
 *
 * 1. 포스팅에 속한 모든 Comment 조회
 * 2. Comment 단건 조회
 * 3. Comment 등록
 * 4. Comment Reply 등록
 */
// TODO: 페이징 처리, 소팅
async function findAllByPostingId(
  target: string,
  blogId: string,
  postingId: string,
  offset: number,
  limit: number
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
      .find<Comment>(query, { sort: { registerDate: -1 } })
      .skip(offset)
      .limit(limit)
      .toArray();
  
    return result ? result : [];
  } finally {
    await client.close();
  }
}

/** Comment 단건 조회 */
async function findById(id: string): Promise<Comment | null> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      id,
    };

    const result = await client
      .db('yalloo')
      .collection('comment')
      .findOne<Comment>(query);

    return result ? result : null;
  } finally {
    await client.close();
  }
}

/** Comment 등록 */
async function register(blogId: string, targetId: string, message: string) {
  //
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  const client = await getClient();

  const query = {
    id: uuidv4(),
    target: 'posting',
    blogId,
    targetId,
    userId: session?.user?.email,
    userName: session?.user?.name,
    userIcon64: session?.user?.image,
    comment: message,
    registerDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    reply: [],
  };

  try {
    await client.db('yalloo').collection('comment').insertOne(query);

    return query;
  } finally {
    await client.close();
  }
}

/** Reply 등록 */
async function registerReply(id: string, message: string) {
  //
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  const comment = await findById(id);
  const replies: CommentReply[] = comment?.reply ?? [];

  const client = await getClient();

  replies.push({
    userId: session?.user?.email ?? '',
    userName: session?.user?.name ?? '',
    userIcon64: session?.user?.image ?? '',
    comment: message,
    registerDate: dayjs().format('YYYY-MM-DD'),
  });

  try {
    const result = await client
      .db('yalloo')
      .collection('comment')
      .updateOne({ id }, { $set: { reply: JSON.stringify(replies) } });
  } finally {
    await client.close();
  }
}

const commentLogic = {
  findAllByPostingId,
  register,
  registerReply,
};

export default commentLogic;
