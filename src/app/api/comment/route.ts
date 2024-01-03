import commentLogic from '@/app/api/comment/logic';
import { toComment } from '@/types/client/comment';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target') ?? '';
  const blogId = searchParams.get('blogId') ?? '';
  const targetId = searchParams.get('targetId') ?? '';
  const offset = searchParams.get('offset') ?? 0;
  const limit = searchParams.get('limit') ?? 8;

  const comments = await commentLogic.findAllByPostingId(
    target,
    blogId,
    targetId,
    Number(offset),
    Number(limit)
  );
  return Response.json(comments);
}

export async function POST(request: Request) {
  const requestBody = await request.json();

  const { message, blogId, targetId } = requestBody;

  const results = await commentLogic.register(blogId, targetId, message);
  return Response.json(results);
}
