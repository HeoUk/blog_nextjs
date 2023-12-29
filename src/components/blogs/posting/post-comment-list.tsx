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
};


export default function PostCommentList({ comments }: Props) {
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
        count={comments.length < 5 ? 1 : comments.length / 5}
        sx={{ my: 5, mx: 'auto' }}
      />
    </>
  );
}
