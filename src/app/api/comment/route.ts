import commentLogic from '@/app/api/comment/logic';
import { toComment } from '@/types/client/comment';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target') ?? '';
  const blogId = searchParams.get('blog') ?? '';
  const targetId = searchParams.get('id') ?? '';

  const comment = await commentLogic.findAllByPostingId(
    target,
    blogId,
    targetId
  );
  return Response.json(comment);
}

export async function POST(request: Request) {
  const requestBody = await request.json();

  const { message, blogId, targetId } = requestBody;

  const results = await commentLogic.register(blogId, targetId, message);
  return Response.json(results);
}
