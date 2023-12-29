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

export type Posting = {
  blogId: string;
  blogName: string;
  blogUserName: string;
  blogIcon64: string;
  id: string;
  title: string;
  contents: string;
  tags: string[];
  readCount: number;
  like: number;
  registerDate: string;
  modifiedDate: string;
  image64: string;
};
