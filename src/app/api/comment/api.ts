import { Comment } from '@/types/client/comment';
import { endpoints } from '../end-point';

const postComment = async (
  message: string,
  blogId: string,
  targetId: string
) => {
  //
  const endpoint = endpoints.comment.register;
  const result = await fetch(`http://localhost:3000/${endpoint.url}`, {
    method: endpoint.method,
    body: JSON.stringify({ message, blogId, targetId }),
  });

  return result.json() as Promise<Comment>;
};

const findAllComments = async (
  target: string,
  blogId: string,
  targetId: string,
  offset: number,
  limit: number,
  init?: RequestInit | undefined,
) => {
  //
  const endpoint = endpoints.comment.findAll;
  const result = await fetch(`http://localhost:3000/${endpoint.url}?target=${target}&blogId=${blogId}&targetId=${targetId}&offset=${offset}&limit=${limit}`, {
    ...init, method: endpoint.method
  });

  return result.json() as Promise<Comment[]>;
};

const CommentApi = {
  postComment,
  findAllComments,
};

export default CommentApi;
