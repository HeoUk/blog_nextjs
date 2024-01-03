import Divider from '@mui/material/Divider';
import PostCommentForm from '../posting/post-comment-form';
import PostCommentList from '../posting/post-comment-list';
// types
import { Comment } from '@/types/client/comment';
import CommentApi from '@/app/api/comment/api';
import { useEffect, useMemo, useState } from 'react';
import CommentCountApi from '@/app/api/comment/counts/api';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { fetchComments } from '@/hooks/blog-posting-hook';

type Props = {
  target: string;
  targetId: string;
  blogId: string;
};

export function DefaultComment(props: Props) {
  //
  const { target, targetId, blogId } = props;
  const [commentCount, setCommentCount] = useState(0);
  const [commentPaging, setCommentPaging] = useState({ offset: 0, limit: 5 });
  const [comments, setComments] = useState([] as Comment[]);

  const commentHook = fetchComments(
    blogId,
    targetId,
    commentPaging.offset,
    commentPaging.limit
  );

  useEffect(() => {
    CommentCountApi.countAllComments(target, blogId, targetId).then(
      (result) => {
        setCommentCount(result);
      }
    );
    commentHook.then((results) => {
      setComments(results);
    });
  }, []);

  useMemo(() => {
    commentHook.then((results) => {
      setComments(results);
    });
  }, [commentPaging]);

  /** METHODS */
  const postComment = (message: string) => {
    //
    CommentApi.postComment(message, blogId, targetId).then((posted) => {
      const results = [posted, ...comments];
      results.pop();
      setComments(results);
    });
  };

  return (
    <>
      <Stack direction='row' sx={{ mb: 3, mt: 5 }}>
        <Typography variant='h4'>Comments</Typography>

        <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
          ({commentCount})
        </Typography>
      </Stack>

      <PostCommentForm postComment={postComment} />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <PostCommentList
        comments={comments}
        commentCount={commentCount}
        commentPaging={commentPaging}
        setCommentPaging={setCommentPaging}
      />
    </>
  );
}
