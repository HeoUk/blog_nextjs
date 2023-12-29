import dayjs from 'dayjs';

export type Comment = {
  id: string;
  target: string;
  blogId: string;
  targetId: string;
  userId: string;
  userName: string;
  userIcon64: string;
  comment: string;
  registerDate: string;
  reply: CommentReply[];
};

export type CommentReply = {
  userId: string;
  userName: string;
  userIcon64: string;
  comment: string;
  registerDate: string;
};

export function toComment(obj: any): Comment {
  return {
    id: '',
    target: obj.target,
    blogId: obj.blogId,
    targetId: obj.targetId,
    userId: '',
    userName: '',
    userIcon64: '',
    comment: obj.comment,
    registerDate: dayjs().format('YYYY-MM-DD'),
    reply: [],
  };
}
