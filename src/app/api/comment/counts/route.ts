import CommentCountLogic from './logic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target') ?? '';
  const blogId = searchParams.get('blogId') ?? '';
  const targetId = searchParams.get('targetId') ?? '';

  const comments = await CommentCountLogic.countAllComments(
    target,
    blogId,
    targetId
  );
  return Response.json(comments);
}
