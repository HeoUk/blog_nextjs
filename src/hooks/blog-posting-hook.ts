import { Posting } from '@/types/client/blog';

export async function fetchPostingDetail(blogId: string, postingId: string) {
  const response = await fetch(
    `http://localhost:3000/api/blog/posting?blog=${blogId}&posting=${postingId}`,
    { cache: 'force-cache', next: { revalidate: 3000 } }
  );
  return response.json().then((result) => result);
}
