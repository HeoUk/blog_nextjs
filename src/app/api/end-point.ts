export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    login: '/api/auth/login',
    register: '/api/auth/register',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
  posting: {
    detail: { url: 'api/blog/posting', method: 'GET'},
    recent: {
      findAll: { url: '/api/blog/posting/recent', method: 'GET'}  
    },
    update: { url: '/api/blog/posting', method: 'PUT'}
  },
  comment: {
    register: { url: '/api/comment', method: 'POST' },
    findAll: { url: '/api/comment', method: 'GET' },
    counts: { url: '/api/comment/counts', method: 'GET' },
  },
};
