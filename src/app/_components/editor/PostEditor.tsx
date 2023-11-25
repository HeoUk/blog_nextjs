'use client';
import Input from '@mui/material/Input/Input';
import React, { useEffect, useState } from 'react';
import { CardType } from '@/app/_components/post_card/api/actions';
import Button from '@mui/material/Button/Button';

export default function PostEditor({ post }: { post: CardType }) {
  //
  const [text, setText] = useState(post.name);

  return (
    <div>
      <h5>포스팅 상세 편집 페이지</h5>
      <Input
        value={text}
        placeholder={'입력'}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant='contained'
        onClick={() => fetch(`/api/card/update?id=${post.id}&name=${text}`)}
      >
        수정
      </Button>
    </div>
  );
}
