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
 * 1. 포스팅에 속한 모든 Comment 개수 조회
 */
// TODO: 페이징 처리, 소팅
async function countAllComments(
  target: string,
  blogId: string,
  postingId: string
): Promise<number> {
  const client = await getClient();

  try {
    await client.connect();

    const query = {
      target,
      blogId,
      targetId: postingId,
    };

    const result = await client
      .db('yalloo')
      .collection('comment')
      .countDocuments(query);

    return result ? result : 0;
  } finally {
    await client.close();
  }
}

const CommentCountLogic = {
  countAllComments,
};

export default CommentCountLogic;
