import { findById } from '@/app/_components/post_card/actions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const card = await findById(id || '');
  return Response.json({ card });
}
