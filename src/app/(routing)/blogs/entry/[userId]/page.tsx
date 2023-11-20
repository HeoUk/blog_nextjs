import { findAll } from '@/app/_components/post_card/actions';
import Button from '@mui/material/Button/Button';

export default async function Page({ params }: { params: { userId: string } }) {
  const data = await findAll();
  return (
    <div>
      <h1>{params.userId} 의 블로그 포스팅, 상세페이지 </h1>
      <div>id: {data[0].id}</div>
      <div>name: {data[0].name}</div>
      <div>age: {data[0].age}</div>
      <Button
        variant='contained'
        href={`/blogs/entry/${data[0].id}/posts/${data[0].id}`}
      >
        편집
      </Button>
    </div>
  );
}
