export interface Blog {
  id: number;
  blogName: string;
  userId: string;
  userName: string;
  blogIntroduce: string;
  image64: string;
  postings: Posting[];
  subscribers: string[];
  notiListeners: string[];
}

export interface Posting {
  title: string;
  contents: string;
  tags: string[];
  readCount: number;
  like: number;
  registerTime: number;
  registerDate: string;
  modifiedTime: number;
  modifiedDate: string;
  image64: string;
}
