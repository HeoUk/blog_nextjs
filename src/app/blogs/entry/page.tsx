export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <h1>(공용 공간)블로그 소개 리트스 페이지</h1>;
}
