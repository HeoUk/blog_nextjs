import { MongoClient, ServerApiVersion } from 'mongodb';
const uri =
  'mongodb+srv://Cluster34912:qkrtkdgus@cluster34912.qd9uvtg.mongodb.net/?retryWrites=true&w=majority';

async function getClient() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client;
}

async function createCollection(collectionName: string): Promise<void> {
  //
  const client = await getClient();

  try {
    await client.db('yalloo').createCollection(collectionName);
  } finally {
    await client.close();
  }
}


export { getClient, createCollection };
