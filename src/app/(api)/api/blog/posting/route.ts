import { findById } from '@/app/(api)/api/blog/posting/posting';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get('blog');
  const postingId = searchParams.get('posting');

  if (blogId && postingId) {
    const posting = await findById(blogId, postingId);
    return Response.json(posting);
  } else {
    return Response.json(null);
  }
}
