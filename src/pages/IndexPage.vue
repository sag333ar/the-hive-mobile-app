<template>
  <q-page>
    <q-list v-if="items.length !== 0">
      <hive-post-list-item
        v-for="item in items"
        :data="item"
        :key="item.post_id"
      >
      </hive-post-list-item>
    </q-list>
    <div class="no-hive-post absolute-center" v-if="items.length === 0">
      <q-spinner-puff color="primary" size="5.5em" />
      <div class="text-h5 text-primary text-center">Loading Data</div>
      <div class="text-h6 text-primary text-center">Please wait...</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DHive from 'src/utils/dhive';
import { HivePostListItemModel } from 'src/components/HivePostListItem/HivePostListItemModel';

import HivePostListItem from 'components/HivePostListItem/HivePostListItem.vue';

export default defineComponent({
  name: 'IndexPage',
  created() {
    this.loadData();
  },
  components: {
    HivePostListItem,
  },
  data() {
    const items: HivePostListItemModel[] = [];
    return {
      items: items,
    };
  },
  methods: {
    loadData() {
      DHive.getPostsOfAccount('sagarkothari88')
        .then((response: HivePostListItemModel[]) => {
          this.items = response;
        })
        .catch((e: Error) => {
          console.error(e);
        });
    },
  },
  setup() {
    return {};
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
