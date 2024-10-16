<script setup lang="ts">
import type { ICountry, INuxtApp } from "~/src/Types/types";

const { $state, $fetcher } = useNuxtApp() as INuxtApp;
const searchQuery = ref("");
const originalCountries = ref<ICountry[]>([
  ...($state?.state.allCountries || []),
]);
watch(searchQuery, (newQuery) => {
  if (!newQuery) {
    if ($state) {
      $state.state.allCountries = [...originalCountries.value];
    }
  } else {
    if ($state) {
      $state.state.allCountries = originalCountries.value.filter(
        (country) =>
          country.name.toLowerCase().includes(newQuery.toLowerCase()) ||
          country.countryCode.toLowerCase().includes(newQuery.toLowerCase()),
      );
    }
  }
});
</script>

<template>
  <div class="searcher">
    <input v-model="searchQuery" placeholder="Search country..." />
  </div>
</template>

<style lang="scss">
.searcher {
  width: 100%;
  margin-left: 40px;
  input {
    color: #aaa;
    background-color: #000;
    border: 1px solid #6d013a;
    border-radius: 8px;
    padding: 10px;
    transition: 0.5s all;
    &:hover {
      border-color: #d5d3d3;
    }
  }
}
</style>
