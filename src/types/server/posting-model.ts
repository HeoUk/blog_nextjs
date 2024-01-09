import { Session } from 'next-auth';
import { Posting } from '../client/posting';

export type PostingModel = {
  blogId: string;
  blogName: string;
  blogUserName: string;
  blogIcon64: string;
  id: string;
  title: string;
  description: string;
  contents: string;
  tags: string[];
  readCount: number;
  likes: string[];
  registerDate: string;
  modifiedDate: string;
  image64: string;
};
