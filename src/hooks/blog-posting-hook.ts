
export async function fetchPostingDetail(blogId: string, postingId: string) {
  const response = await fetch(
    `http://localhost:3000/api/blog/posting?blog=${blogId}&posting=${postingId}`,
    { cache: 'force-cache', next: { revalidate: 3000 } }
  );
  return response.json().then((result) => result);
}

export async function fetchRecentPostings(blogId: string) {
  const response = await fetch(
    `http://localhost:3000/api/blog/posting/recent?blog=${blogId}`,
    { cache: 'force-cache', next: { revalidate: 3000 } }
  );
  return response.json().then((result) => result);
}

export async function fetchComments(blogId: string, postingId: string) {
  const response = await fetch(
    `http://localhost:3000/api/comment?target=posting&blog=${blogId}&id=${postingId}`,
    { cache: 'force-cache', next: { revalidate: 3000 } }
  );
  return response.json().then((result) => result);
}
