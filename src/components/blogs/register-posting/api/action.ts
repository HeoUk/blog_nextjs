import { createCollection } from '@/_db/mongodb';

async function findBlogByDate() {
  // const client = await createCollection('blog');
  // try {
  //   await client.connect();
  //
  //   const query = {
  //     'postings.registerDate': date,
  //   };
  //
  //   const result = await client
  //     .db('yalloo')
  //     .collection('blog')
  //     .find<Blog>(query)
  //     .toArray();
  //   console.log(result);
  //
  //   return result;
  // } finally {
  //   await client.close();
  // }
}

export { findBlogByDate };
