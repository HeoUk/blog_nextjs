import PostDetail from '@/components/blogs/posting/post-dedetail';
import { findById } from '@/app/api/blog/posting/posting';
import { findAllByPostingId } from '@/app/api/comment/comment';
import { Comment } from '@/types/client/comment';

// ----------------------------------------------------------------------

export default async function Page({
  params,
}: {
  params: { id: string; 'posting-id': string };
}) {
  //
  const blogId = params['id'];
  const postingId = params['posting-id'];

  const posting = await findById(blogId, postingId);
  const comments = await findAllByPostingId('posting', blogId, postingId);

  return <PostDetail blogId={blogId} postingId={postingId} posting={posting} comments={comments} />;
}
