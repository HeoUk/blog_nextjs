import PostingApi from '@/app/api/blog/posting/api';
import CommentApi from '@/app/api/comment/api';

export async function fetchPostingDetail(blogId: string, postingId: string) {
  const response = await PostingApi.findPostingDetail(blogId, postingId, {
    cache: 'force-cache',
    next: { revalidate: 3000 },
  });
  return response;
}

export async function fetchRecentPostings(blogId: string) {
  const response = await PostingApi.findAllRecentPostings(blogId, {
    next: { revalidate: 3000 },
  });
  return response;
}

export async function fetchComments(
  blogId: string,
  postingId: string,
  offset: number,
  limit: number
) {
  const response = await CommentApi.findAllComments(
    'posting',
    blogId,
    postingId,
    offset,
    limit,
    { next: { revalidate: 10 } }
  );
  return response;
}
