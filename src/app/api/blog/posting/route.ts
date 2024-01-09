import PostingLogic from '@/app/api/blog/posting/logic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get('blog');
  const postingId = searchParams.get('posting');

  if (blogId && postingId) {
    const posting = await PostingLogic.findById(blogId, postingId);
    return Response.json(posting);
  } else {
    return Response.json(null);
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get('blog');
  const postingId = searchParams.get('posting');

  const requestBody = await request.json();

  const { updates } = requestBody;

  if (blogId && postingId) {
    const posting = await PostingLogic.update(blogId, postingId, updates);
    return Response.json(posting);
  } else {
    return Response.json(null);
  }
}
