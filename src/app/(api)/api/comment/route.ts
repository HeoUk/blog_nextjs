import { findAllByPostingId } from '@/app/(api)/api/comment/comment';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target') ?? '';
  const blogId = searchParams.get('blog') ?? '';
  const targetId = searchParams.get('id') ?? '';

  const comment = await findAllByPostingId(target, blogId, targetId);
  return Response.json(comment);
}
