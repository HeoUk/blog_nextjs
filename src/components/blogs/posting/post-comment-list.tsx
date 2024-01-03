// @mui
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
// types
import { Comment } from '@/types/client/comment';
//
import PostCommentItem from './post-comment-item';
// utils
import { fDate } from '@/utils/format-time';
import dayjs from 'dayjs';

// ----------------------------------------------------------------------

type Props = {
  comments: Comment[];
  commentCount: number;
  commentPaging: { offset: number; limit: number };
  setCommentPaging: ({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }) => void;
};

export default function PostCommentList({
  comments,
  commentCount,
  commentPaging,
  setCommentPaging,
}: Props) {
  return (
    <>
      <>
        {comments.map((comment) => {
          const { id } = comment;

          const hasReply = !!comment.reply.length;

          return (
            <Box key={id}>
              <PostCommentItem
                name={comment.userName}
                message={comment.comment}
                postedAt={dayjs(comment.registerDate).toDate()}
                avatarUrl={'avatarUrl'}
              />
              {hasReply &&
                comment.reply.map((r) => {
                  return (
                    <PostCommentItem
                      key={r.userId}
                      name={r.userName}
                      message={r.comment}
                      postedAt={dayjs(r.registerDate).toDate()}
                      avatarUrl={r.userIcon64}
                      tagUser={comment.userName}
                      hasReply
                    />
                  );
                })}
            </Box>
          );
        })}
      </>

      <Pagination
        defaultPage={1}
        page={commentPaging.limit ? commentPaging.limit / 5 + 1 : 1}
        onChange={(e) => {
          setCommentPaging({
            limit: 5,
            offset: (Number(e.target.value) - 1) * 5,
          });
        }}
        count={commentCount < 5 ? 1 : commentCount / 5}
        sx={{ my: 5, mx: 'auto' }}
      />
    </>
  );
}
