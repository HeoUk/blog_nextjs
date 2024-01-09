import { Session } from 'next-auth';
import { PostingModel } from '../server/posting-model';

export type Posting = {
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
  like: number;
  likes: string[];
  hasLiked: boolean;
  registerDate: string;
  modifiedDate: string;
  image64: string;
};

export function gePostingAsClient(result: PostingModel, session: Session|null) {
  return {
    ...result,
    like: result.likes.length,
    hasLiked: !!result.likes.find((email) => email === session?.user?.email),
  };
}
