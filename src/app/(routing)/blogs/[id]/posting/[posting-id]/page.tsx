'use client';

// @mui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// routes
import { paths } from '@/routes/paths';
import { RouterLink } from '@/routes/components';
// utils
import { fShortenNumber } from '@/utils/format-number';
// api
import { useGetPost, useGetLatestPosts } from '@/api/blog/blog';
// components
import Iconify from '@/components/blogs/iconify';
import Markdown from '@/components/blogs/markdown';
import EmptyContent from '@/components/blogs/empty-content';
import CustomBreadcrumbs from '@/components/blogs/custom-breadcrumbs';
//
import PostList from '../post-list';
import PostCommentList from '../post-comment-list';
import PostCommentForm from '../post-comment-form';
import PostDetailsHero from '../post-details-hero';
import { PostDetailsSkeleton } from '../post-skeleton';
import { PostingTopper } from '@/components/blogs/posting-topper';
import {
  fetchComments,
  fetchPostingDetail,
  fetchRecentPostings,
} from '@/hooks/blog-posting-hook';
import { useEffect, useState } from 'react';
import { Posting } from '@/types/client/blog';
import { Comment } from '@/types/client/comment';

// ----------------------------------------------------------------------

export default function Page({
  params,
}: {
  params: { id: string; 'posting-id': string };
}) {
  //
  const [posting, setPosting] = useState({} as Posting);
  const [postingLoading, setPostingLoading] = useState(true);
  const [recentPosting, setRecentPosting] = useState([] as Posting[]);
  const [comments, setComments] = useState([] as Comment[]);
  const [recentPostingLoading, setRecentPostingLoading] = useState(true);

  const postingDetailHook = fetchPostingDetail(
    params['id'],
    params['posting-id']
  );

  const recentPostingsHook = fetchRecentPostings(params['id']);
  const commentsHook = fetchComments(params['id'], params['posting-id']);

  useEffect(() => {
    postingDetailHook.then((postingDetail) => {
      setPosting(postingDetail);
      setPostingLoading(false);
    });

    recentPostingsHook.then((posting) => {
      setRecentPosting(posting);
      setRecentPostingLoading(false);
    });

    commentsHook.then((comments) => {
      setComments(comments);
    });
  }, []);

  // const { post, postError, postLoading } = useGetPost(title);

  // const { latestPosts, latestPostsLoading } = useGetLatestPosts(title);

  const renderSkeleton = <PostDetailsSkeleton />;

  const renderError = (
    <Container sx={{ my: 10 }}>
      <EmptyContent
        filled
        title='Empty Contents'
        action={
          <Button
            component={RouterLink}
            href={paths.post.root}
            startIcon={<Iconify icon='eva:arrow-ios-back-fill' width={16} />}
            sx={{ mt: 3 }}
          >
            Back to List
          </Button>
        }
        sx={{ py: 10 }}
      />
    </Container>
  );

  const renderPost = posting && (
    <>
      <PostDetailsHero
        userName={posting.blogUserName}
        userImage={posting.blogIcon64}
        title={posting.title}
        image64={posting.image64}
        registerDate={posting.registerDate}
      />

      <Container
        maxWidth={false}
        sx={{
          py: 3,
          mb: 5,
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <CustomBreadcrumbs
          links={[
            {
              name: 'YALLOO',
              href: '/',
            },
            {
              name: '블로그',
              href: paths.post.root,
            },
            {
              name: posting?.blogName,
            },
          ]}
          sx={{ maxWidth: 720, mx: 'auto' }}
        />
      </Container>

      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
          <Typography variant='subtitle1' sx={{ mb: 5 }}>
            {posting.title}
            {/* description */}
          </Typography>

          <Markdown children={posting.contents} />

          <Stack
            spacing={3}
            sx={{
              py: 3,
              borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
              borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Stack direction='row' flexWrap='wrap' spacing={1}>
              {posting?.tags?.map((tag) => (
                <Chip key={tag} label={tag} variant='soft' />
              ))}
            </Stack>

            <Stack direction='row' alignItems='center'>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    size='small'
                    color='error'
                    icon={<Iconify icon='solar:heart-bold' />}
                    checkedIcon={<Iconify icon='solar:heart-bold' />}
                  />
                }
                label={fShortenNumber(posting.like)}
                sx={{ mr: 1 }}
              />

              {/* <AvatarGroup>
                {posting.favoritePerson.map((person: any) => (
                  <Avatar
                    key={person.name}
                    alt={person.name}
                    src={person.avatarUrl}
                  />
                ))}
              </AvatarGroup> */}
            </Stack>
          </Stack>

          <Stack direction='row' sx={{ mb: 3, mt: 5 }}>
            <Typography variant='h4'>Comments</Typography>

            <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
              ({comments.length}){/* ({post.comments.length}) */}
            </Typography>
          </Stack>

          <PostCommentForm />

          <Divider sx={{ mt: 5, mb: 2 }} />

          <PostCommentList comments={comments} />
        </Stack>
      </Container>
    </>
  );

  const renderLatestPosts = (
    <>
      <Typography variant='h4' sx={{ mb: 5 }}>
        Recent Posts
      </Typography>
      <PostList
        posts={
          recentPosting.length < 4
            ? recentPosting
            : recentPosting.slice(recentPosting.length - 4)
        }
        loading={recentPostingLoading}
        disabledIndex
      />
    </>
  );

  return (
    <>
      <PostingTopper />
      {postingLoading && renderSkeleton}

      {/* {postError && renderError} */}

      {posting && renderPost}

      <Container sx={{ pb: 15 }}>
        {!!recentPosting.length && renderLatestPosts}
      </Container>
    </>
  );
}
