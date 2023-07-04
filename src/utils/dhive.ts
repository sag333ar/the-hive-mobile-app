import { HivePostListItemModel } from 'src/components/HivePostListItem/HivePostListItemModel';
import { Client } from '@hiveio/dhive';
const client = new Client([
  'https://api.hive.blog',
  'https://api.deathwing.me',
  'https://anyx.io',
  'https://hive-api.arcange.eu',
]);

class DHive {
  async getPostsOfAccount(account: string): Promise<HivePostListItemModel[]> {
    try {
      const data = await client.call('bridge', 'get_account_posts', {
        sort: 'blog',
        account: account,
        limit: 50,
      });
      return data.map((item: any) => {
        const object: HivePostListItemModel = {
          author: item.author,
          body: item.body,
          category: item.category,
          children: item.children,
          created: item.created,
          curator_payout_value: item.curator_payout_value,
          image: item.json_metadata.image[0],
          pending_payout_value: item.pending_payout_value,
          permlink: item.permlink,
          post_id: item.post_id,
          title: item.title,
          total_votes: item.stats.total_votes,
        };
        return object;
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

export default new DHive();
