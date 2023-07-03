<template>
  <q-page class="column">
    <q-list v-if="data !== null">
      <q-item v-for="item in data" :key="item.post_id">
        <q-item-section top>
          <q-img :src="getImageUrl(item)" :ratio="16 / 9" :fit="'cover'" side />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>
            {{ getBetterString(item.body) }}
          </q-item-label>
        </q-item-section>

        <!-- <q-item-section side top>
          <q-item-label caption>{{
            '$ ' + item.pending_payout_value.replace(' HBD', '')
          }}</q-item-label>
        </q-item-section> -->
      </q-item>
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
          .substr(1, 100);
      },
      getImageUrl(item) {
        const value = item.json_metadata.image[0];
        return 'https://images.hive.blog/128x256/' + value;
      },
    };
  },
});
</script>
