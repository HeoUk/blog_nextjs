// ----------------------------------------------------------------------
// const MOCK_ID = 'id';
// const MOCK_TITLE = 'title';

const ROOTS = {
  BLOG: '/blogs',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneUI: 'https://mui.com/store/items/zone-landing-page/',
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma:
    'https://www.figma.com/file/kAYnYYdib0aQPNKZpgJT6J/%5BPreview%5D-Minimal-Web.v5.0.0?type=design&node-id=0%3A1&t=Al4jScQq97Aly0Mn-1',

  // BLOGS
  blogs: {
    root: `${ROOTS.BLOG}`,
    myBlog: `${ROOTS.BLOG}/1`,
    interest: `${ROOTS.BLOG}/interest`,
  },
  //POST
  post: {
    root: '/root',
    details: (title: string) => `/blogs/1/posting/${title}`,
  },
};
