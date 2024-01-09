
import { endpoints } from '../../end-point';

const findPostingDetail = async (blogId: string, postingId: string, init?: RequestInit | undefined,) => {
  //
  const endpoint = endpoints.posting.detail;

  const response = await fetch(
    `http://localhost:3000/${endpoint.url}?blog=${blogId}&posting=${postingId}`,
    { ...init }
  );
  return response.json().then((result) => result);
}

const findAllRecentPostings = async(blogId: string, init?: RequestInit | undefined,) => {
  //
  const endpoint = endpoints.posting.recent.findAll;
  const response = await fetch(
    `http://localhost:3000/${endpoint.url}?blog=${blogId}`,
    { ...init }
  );
  return response.json().then((result) => result);
}

const updatePosting = async (
  blogId: string,
  postingId: string,
  updates: any
) => {
  //
  const endpoint = endpoints.posting.update;
  const result = await fetch(
    `http://localhost:3000/${endpoint.url}?blog=${blogId}&posting=${postingId}`,
    {
      body: JSON.stringify({ updates }),
      method: endpoint.method,
    }
  );

  return result.json() as Promise<number>;
};

const PostingApi = {
  findPostingDetail,
  updatePosting,
  findAllRecentPostings
};

export default PostingApi;
