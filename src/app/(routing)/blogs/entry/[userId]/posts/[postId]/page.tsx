import PostEditor from '@/app/_components/editor/PostEditor';
import { findById } from '@/app/_components/post_card/actions';

export default async function Page({
  params,
}: {
  params: { userId: string; postId: string };
}) {
  const post = await findById(params.postId);
  return (
    <div>
      <h1>포스팅 편집</h1>
      <h1>
        {params.userId}'s Blog - Post:{params.postId}
        <PostEditor post={post} />
      </h1>
    </div>
  );
}
