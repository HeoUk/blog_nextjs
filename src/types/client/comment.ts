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
