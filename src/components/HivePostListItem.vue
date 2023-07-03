<template>
  <q-item :key="post_id">
    <q-item-section top>
      <q-img :src="getImageUrl(image)" :ratio="16 / 9" :fit="'cover'" side />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ getBetterString(body) }}
      </q-item-label>
    </q-item-section>

    <!-- <q-item-section side top>
          <q-item-label caption>{{
            '$ ' + item.pending_payout_value.replace(' HBD', '')
          }}</q-item-label>
        </q-item-section> -->
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { removeMd } from 'remove-markdown';

export default defineComponent({
  name: 'HivePostListItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    post_id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      getBetterString(string: string) {
        return removeMd(string)
          .replace(/<\/?[^>]+(>|$)/g, '')
          .substr(1, 100);
      },
      getImageUrl(string: string) {
        return 'https://images.hive.blog/128x256/' + string;
      },
    };
  },
});
</script>

<style scoped></style>
