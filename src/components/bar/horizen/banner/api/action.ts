import { getClient } from '@/api/_db/mongodb';
import {Banner} from "@/types/banner";

async function findAllBanners(): Promise<Banner[]> {
  const client = await getClient();

  try {
    await client.connect();

    const result = await client
      .db('yalloo')
      .collection('MainBanner')
      .find<Banner>({})
      .toArray();
    console.log(result);

    return result;
  } finally {
    await client.close();
  }
}

export { findAllBanners };
