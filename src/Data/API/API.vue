<template>
  <slot v-if="!pending"> </slot>
</template>

<script setup lang="ts">
import type { INuxtApp } from "~/src/Types/types";

const { $state, $fetcher } = useNuxtApp() as INuxtApp;
const pending = ref(true);
onMounted(async () => {
  try {
    if ($state && $fetcher) {
      $state.state.allCountries =
        await $fetcher.fetchAvailableCountries("AvailableCountries");
    }
    const shuffledCountries = [...($state?.state.allCountries || [])]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    if ($state) {
      $state.state.randomCountries = shuffledCountries;
    }
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
});
</script>
