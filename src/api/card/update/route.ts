// import { update } from '@/app/_components/post_card/actions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  // const name = searchParams.get('name');

  // const card = await update(id || '', name || '');
  return Response.json({ id });
}
