import CommentLogic from '@/app/api/blog/posting/logic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get('blog');

  if (blogId) {
    const posting = await CommentLogic.findRecentPostings(blogId);
    return Response.json(posting);
  } else {
    return Response.json(null);
  }
}
