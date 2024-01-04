import PostDetailPage from '@/components/blogs/posting-detail/pages/post-detail-page';
import { findById } from '@/app/api/blog/posting/posting';
import commentLogic from '@/app/api/comment/logic';
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

  return (
    <PostDetailPage blogId={blogId} postingId={postingId} posting={posting} />
  );
}
