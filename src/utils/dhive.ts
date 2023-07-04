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
    console.log('loading started');
    try {
      const data = await client.call('bridge', 'get_account_posts', {
        sort: 'blog',
        account: account,
        limit: 50,
      });
      const records: HivePostListItemModel[] = [];
      data.forEach((item: any) => {
        const object: HivePostListItemModel = {
          author: item.author,
          body: item.body,
          category: item.category,
          children: item.children,
          created: item.created,
          curator_payout_value: item.curator_payout_value,
          image:
            item.hasOwnProperty('json_metadata') &&
            item.json_metadata.hasOwnProperty('image') &&
            item.json_metadata.image.length > 0
              ? item.json_metadata.image[0]
              : 'https://images.hive.blog/p/AmRc67RgYaWTamZtjiRVK9pxDgRdg2RtnXmG5dbeGuzK3WNfkBktwpfi3UhQYZEvm6HgB4fnK2SbCmNMasmddEq2ex1sDFGXTXMjeVcZqQcLY1N6UAdnbe7wHKvJX4a6rTb6gHTwS2heuN3m8ZCCHDkEggXGJZnW?format=match&mode=fit&width=256&height=512',
          pending_payout_value: item.pending_payout_value,
          permlink: item.permlink,
          post_id: item.post_id,
          title: item.title,
          total_votes: item.stats.total_votes,
        };
        records.push(object);
      });
      return records;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

export default new DHive();
