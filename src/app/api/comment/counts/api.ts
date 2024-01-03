import { Comment } from '@/types/client/comment';
import { endpoints } from '../../end-point';

const countAllComments = async (
  target: string,
  blogId: string,
  targetId: string,
  init?: RequestInit | undefined
) => {
  //
  const endpoint = endpoints.comment.counts;
  const result = await fetch(
    `http://localhost:3000/${endpoint.url}?target=${target}&blogId=${blogId}&targetId=${targetId}`,
    {
      ...init,
      method: endpoint.method,
    }
  );

  return result.json() as Promise<number>;
};

const CommentCountApi = {
  countAllComments,
};

export default CommentCountApi;
