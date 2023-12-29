export type Blog = {
  id: string;
  blogName: string;
  userId: string;
  userName: string;
  blogIntroduce: string;
  image64: string;
  postings: Posting[];
  subscribers: string[];
  notiListeners: string[];
};
