import { findByEmail } from './users';

export async function POST(request: Request) {
  const data = await request.json();
  const { email } = data;

  const user = await findByEmail(email);
  return Response.json(user);
}
