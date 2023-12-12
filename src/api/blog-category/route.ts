import { findBlogCategories } from '@/components/blogs/actions';

export async function GET() {
  const blogCategories = await findBlogCategories();
  return Response.json(blogCategories);
}
