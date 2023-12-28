// @mui
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
// types
import { Posting } from '@/types/server/blog';
//
import PostCommentItem from './post-comment-item';

// ----------------------------------------------------------------------

type Props = {
  comments: Posting[];
};

export default function PostCommentList({ comments }: Props) {
  return (
    <>
      <>
        {comments.map((comment) => {
          const { id, 
            // replyComment, name, users, message, avatarUrl, postedAt 
          } = comment;

          const hasReply = true; //!!replyComment.length;

          return (
            <Box key={id}>
              <PostCommentItem
                name={'name1'}
                message={'message'}
                postedAt={new Date()}
                avatarUrl={'avatarUrl'}
              />
              {hasReply &&
                [{id: '1', name: "name1",userId: '1', message: "message", postedAt: new Date(), tagUser: "tagUser"}].map((reply) => {
                  const userReply = [{id: '1', name: 'replyUserName', avatarUrl: "/"}].find((user) => user.id === reply.userId);

                  return (
                    <PostCommentItem
                      key={reply.id}
                      name={userReply?.name || ''}
                      message={reply.message}
                      postedAt={reply.postedAt}
                      avatarUrl={userReply?.avatarUrl || ''}
                      tagUser={reply.tagUser}
                      hasReply
                    />
                  );
                })}
            </Box>
          );
        })}
      </>

      <Pagination count={8} sx={{ my: 5, mx: 'auto' }} />
    </>
  );
}
