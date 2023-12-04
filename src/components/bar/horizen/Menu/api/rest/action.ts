export async function fetchBlogCategory() {
  const response = await fetch(`/api/blogcategory`);
  return (await response.json()) as Promise<{ id: string; name: string }[]>;
}
