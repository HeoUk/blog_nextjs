import Divider from '@mui/material/Divider';
import PostCommentForm from '../posting/post-comment-form';
import PostCommentList from '../posting/post-comment-list';
// types
import { Comment } from '@/types/client/comment';
import CommentApi from '@/app/api/comment/api';
import { useState } from 'react';

type Props = {
  comments: Comment[];
  target: string;
  targetId: string;
  blogId: string;
};

export function DefaultComment(props: Props) {
  //
  const { comments, target, targetId, blogId } = props;
  const [editableComments, setEditableComments] = useState(comments);

  /** METHODS */
  const postComment = (message: string) => {
    //
    CommentApi.postComment(message, blogId, targetId).then((posted) => {
      setEditableComments([posted, ...editableComments]);
    });
  };

  return (
    <>
      <PostCommentForm postComment={postComment} />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <PostCommentList comments={editableComments} />
    </>
  );
}
