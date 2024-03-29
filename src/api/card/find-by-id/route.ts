import {findById} from '@/components/blogs/actions';

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');

  const card = await findById(id ?? '');
  return Response.json({card});
}
