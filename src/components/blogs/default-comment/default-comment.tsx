import Divider from '@mui/material/Divider';
import PostCommentForm from '../posting/post-comment-form';
import PostCommentList from '../posting/post-comment-list';
// types
import { Comment } from '@/types/client/comment';

type Props = {
  comments: Comment[];
};

export function DefaultComment(props: Props) {
  //
  const { comments } = props;

  return (
    <>
      <PostCommentForm />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <PostCommentList comments={comments} />
    </>
  );
}
