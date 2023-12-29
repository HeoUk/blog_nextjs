import { findAllByPostingId } from '@/app/api/comment/comment';
import { toComment } from '@/types/client/comment';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target') ?? '';
  const blogId = searchParams.get('blog') ?? '';
  const targetId = searchParams.get('id') ?? '';

  const comment = await findAllByPostingId(target, blogId, targetId);
  return Response.json(comment);
}

export async function POST(request: Request) {
  const requestBody = request.body;
  const initComment = toComment(requestBody);
  // const comment = await findAllByPostingId(target, blogId, targetId);
  // return Response.json(comment);
}
