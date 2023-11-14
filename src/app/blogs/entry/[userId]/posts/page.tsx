
export default async function Page({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h1>{params.userId} 의 포스팅 리스트</h1>
    </div>
  );
}
