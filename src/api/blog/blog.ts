/**
 * DB Access 관리 및 CRUD 함수 정의
 *
 * 1. Server component에서 직접 호출
 * 2. route.ts 파일에서 호출
 */
import { useMemo } from 'react';
// utils
import { endpoints } from '@/app/api/end-point';
// types
import { Posting } from '@/types/client/posting';

// ----------------------------------------------------------------------
//

export function useGetPosts() {
  const URL = endpoints.post.list;

  const memoizedValue = useMemo(() => [], []);

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetPost(title: string) {
  const URL = title ? [endpoints.post.details, { params: { title } }] : null;

  const memoizedValue = useMemo(
    () => ({
      post: {
        id: 'string',
        title: 'string',
        tags: ['tag1'],
        publish: 'string',
        content: 'string',
        coverUrl: 'string',
        metaTitle: 'string',
        totalViews: 1,
        totalShares: 2,
        description: 'string',
        totalComments: 1,
        totalFavorites: 2,
        metaKeywords: ['meta'],
        metaDescription: 'string',
        comments: [],
        createdAt: new Date(),
        favoritePerson: [{ name: 'kwo', avatarUrl: '' }],
        author: {
          name: 'author1',
          avatarUrl: '',
        },
      },
      postError: { message: '' },
      postLoading: false,
    }),
    []
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetLatestPosts(title: string) {
  const URL = title ? [endpoints.post.latest, { params: { title } }] : null;

  const memoizedValue = useMemo(
    () => ({
      latestPosts: [],
      latestPostsLoading: false,
    }),
    []
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useSearchPosts(query: string) {
  const URL = query ? [endpoints.post.search, { params: { query } }] : null;

  const memoizedValue = useMemo(() => [], []);

  return memoizedValue;
}
