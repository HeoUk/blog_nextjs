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
import { useState } from 'react';

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
  //
  const [page, setPage] = useState(1);
  // commentPaging.limit ? commentPaging.limit / 5 + 1 : 1

  const handleChangePage = (value: number) => {
    setCommentPaging({
      limit: 5,
      offset: (Number(value) - 1) * 5,
    });
    setPage(value);
  };
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
        page={page}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          handleChangePage(value);
        }}
        count={commentCount < 5 ? 1 : Math.floor(Number(commentCount / 5)) + 1}
        sx={{ my: 5, mx: 'auto' }}
      />
    </>
  );
}
