<template>
  <q-page class="column">
    <q-list v-if="data !== null">
      <div
        class="q-pt-sm q-pl-sm q-pr-sm row items-start"
        v-for="item in data"
        :key="item.post_id"
      >
        <q-card class="my-card">
          <q-item class="q-pb-none q-pb-none">
            <q-item-section avatar>
              <q-avatar>
                <q-img :src="getAuthorUrl(item)" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>@{{ item.author }}</q-item-label>
              <q-item-label caption>
                {{ getAgoDate(item) }} in {{ item.category }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-card-section class="q-pt-sm q-pb-none q-pb-sm">
            <q-img
              :src="getImageUrl(item)"
              :ratio="16 / 9"
              :fit="'cover'"
              side
            />
            <q-item-label class="q-pt-md">{{ item.title }}</q-item-label>
            <q-item-label caption>
              {{ getBetterString(item.body) }}
            </q-item-label>
            <q-item-label class="q-pt-sm">
              <div class="row">
                <div class="col">
                  <q-icon name="recommend" size="24px" />
                  {{
                    (item.pending_payout_value === '0.000 HBD'
                      ? item.curator_payout_value
                      : item.pending_payout_value
                    ).replace(' HBD', '')
                  }}
                </div>
                <div class="col">
                  <q-icon name="comment" size="24px" />
                  {{ item.children }}
                </div>
                <div class="col">
                  <q-icon name="favorite" size="24px" />
                  {{ item.stats.total_votes }}
                </div>
                <!-- <div class="col">
                  <q-icon name="share" size="24px" />
                </div>
                <div class="col">
                  <q-icon name="repeat" size="24px" />
                </div> -->
                <div>
                  <q-icon name="more_horiz" size="24px" />
                </div>
              </div>
            </q-item-label>
          </q-card-section>
        </q-card>
      </div>
    </q-list>
    <div class="no-hive-post absolute-center" v-if="data === null">
      <q-spinner-puff color="primary" size="5.5em" />
      <div class="text-h5 text-primary text-center">Loading Data</div>
      <div class="text-h6 text-primary text-center">Please wait...</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Client } from '@hiveio/dhive';
import { useQuasar } from 'quasar';
import removeMd from 'remove-markdown';
import moment from 'moment';

const client = new Client([
  'https://api.hive.blog',
  'https://api.deathwing.me',
  'https://anyx.io',
  'https://hive-api.arcange.eu',
]);

async function getPostsOfAccount(account: string) {
  try {
    const data = await client.call('bridge', 'get_account_posts', {
      sort: 'blog',
      account: account,
      limit: 20,
    });
    return data;
  } catch (e) {
    return false;
  }
}

export default defineComponent({
  name: 'IndexPage',
  created() {
    this.loadData();
  },
  setup() {
    const data = ref(null);
    const $q = useQuasar();

    return {
      data,
      loadData() {
        getPostsOfAccount('sagarkothari88')
          .then((response) => {
            data.value = response;
          })
          .catch((e) => {
            console.error(e);
            $q.notify('Loading Failed');
          });
      },
      getBetterString(string) {
        return removeMd(string)
          .replace(/<\/?[^>]+(>|$)/g, '')
          .substr(1, 200);
      },
      getAgoDate(item) {
        return moment(item.created).fromNow();
      },
      getImageUrl(item) {
        const value = item.json_metadata.image[0];
        return 'https://images.hive.blog/256x512/' + value;
      },
      getAuthorUrl(item) {
        return `https://images.hive.blog/u/${item.author}/avatar/small`;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.no-hive-post {
  text-align: center;
}
.my-card {
  width: 100%;
  // max-width: 450px;
}
</style>
