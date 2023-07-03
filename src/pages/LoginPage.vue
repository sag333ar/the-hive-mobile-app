<template>
  <q-page class="column"> </q-page>
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

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const data = ref(null);
    const $q = useQuasar();

    return {
      data,
    };
  },
});
</script>
