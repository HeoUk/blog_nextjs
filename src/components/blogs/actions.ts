import { getClient } from '@/_db/mongodb';

// const uri =
//   'mongodb+srv://Cluster34912:qkrtkdgus@cluster34912.qd9uvtg.mongodb.net/?retryWrites=true&w=majority';

export type CardType = {
  id: string;
  name: string;
  age: string;
};

export interface BlogCategory {
  id: number;
  name: string;
  tags: string[];
}

async function findAll(): Promise<CardType[]> {
  //
  const client = await getClient();
  try {
    await client.connect();

    const result = await client
      .db('yalloo')
      .collection('users')
      .find<CardType>({})
      .toArray();

    return result;
  } finally {
    await client.close();
  }
}

async function findById(id: string): Promise<CardType> {
  const client = await getClient();

  try {
    await client.connect();

    var query = { id };

    const result = await client
      .db('yalloo')
      .collection('users')
      .find<CardType>(query)
      .toArray();

    return result[0];
  } finally {
    await client.close();
  }
}

async function findBlogCategories(): Promise<BlogCategory[]> {
  const client = await getClient();

  try {
    await client.connect();

    const result = await client
      .db('yalloo')
      .collection('BlogCategory')
      .find<BlogCategory>({})
      .toArray();

    return result;
  } finally {
    await client.close();
  }
}

async function update(id: string, text: string): Promise<void> {
  const client = await getClient();

  try {
    await client.connect();

    const query = { id };

    const newvalues = { $set: { name: text } };

    const result = await client
      .db('yalloo')
      .collection('users')
      .updateOne(query, newvalues);
  } finally {
    await client.close();
  }
}

export { findAll, findById, update, findBlogCategories };
