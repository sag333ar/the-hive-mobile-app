<template>
  <div class="q-pt-sm q-pl-sm q-pr-sm row items-start">
    <q-card class="my-card">
      <q-item class="q-pb-none q-pb-none">
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="getAuthorUrl()" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>@{{ data.author }}</q-item-label>
          <q-item-label caption>
            {{ getAgoDate() }} in {{ data.category }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section class="q-pt-sm q-pb-none q-pb-sm">
        <q-img :src="getImageUrl()" :ratio="16 / 9" :fit="'cover'" side />
        <q-item-label class="q-pt-md">{{ data.title }}</q-item-label>
        <q-item-label caption>
          {{ getBetterString() }}
        </q-item-label>
        <q-item-label class="q-pt-sm">
          <div class="row">
            <div class="col">
              <q-icon name="recommend" size="24px" />
              {{
                (data.pending_payout_value === '0.000 HBD'
                  ? data.curator_payout_value
                  : data.pending_payout_value
                ).replace(' HBD', '')
              }}
            </div>
            <div class="col">
              <q-icon name="comment" size="24px" />
              {{ data.children }}
            </div>
            <div class="col">
              <q-icon name="favorite" size="24px" />
              {{ data.total_votes }}
            </div>
            <div>
              <q-icon name="more_horiz" size="24px" />
            </div>
          </div>
        </q-item-label>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import removeMd from 'remove-markdown';
import moment from 'moment';
import { HivePostListItemModel } from './HivePostListItemModel';

export default defineComponent({
  name: 'HivePostListItem',
  props: {
    data: {
      type: Object as PropType<HivePostListItemModel>,
      required: true,
    },
  },
  methods: {
    getBetterString(): string {
      return removeMd(this.data.body)
        .replace(/<\/?[^>]+(>|$)/g, '')
        .substr(1, 200);
    },
    getAgoDate(): string {
      return moment(this.data.created).fromNow();
    },
    getImageUrl(): string {
      // const value = item.json_metadata.image[0];
      return 'https://images.hive.blog/256x512/' + this.data.image;
    },
    getAuthorUrl(): string {
      return 'https://images.hive.blog/u/' + this.data.author + '/avatar/small';
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
