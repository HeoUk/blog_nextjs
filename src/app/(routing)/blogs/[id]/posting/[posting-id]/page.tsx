import PostDetailPage from '@/components/blogs/posting-detail/pages/post-detail-page';
import PostingLogic from '@/app/api/blog/posting/logic';
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

  const posting = await PostingLogic.findById(blogId, postingId);

  return (
    <>
      <PostDetailPage blogId={blogId} postingId={postingId} posting={posting} />
    </>
  );
}
