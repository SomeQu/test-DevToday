<script setup lang="ts">
import type { INuxtApp } from "~/src/Types/types";

const { $state, $fetcher } = useNuxtApp() as INuxtApp;
</script>

<template>
  <div class="countriesList main">
    <div v-for="(country, index) in $state?.state.allCountries" class="country">
      <NuxtLink
        :to="{ name: 'country-id', params: { id: country.countryCode } }"
      >
        <span>
          {{ country.name }}
        </span>
        <span>
          {{ country.countryCode }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.countriesList {
  display: flex;
  flex-direction: column;
  gap: 8px;
  &.main {
    overflow-y: auto;
    height: 50vh;
    border-radius: 8px;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #6d013a;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #8d174f;
    }

    &::-webkit-scrollbar-track {
      background: #212529;
    }
  }
  .country {
    color: #d5d3d3;
    border: 1px solid #6d013a;
    border-radius: 8px;
    background-color: #212529;
    padding: 10px 5px;
    font-size: 16px;
    transition: all 0.5s;
    a {
      display: flex;
      // gap: 50px;
      align-items: center;
      justify-content: space-between;
      padding: 10px 60px;
    }
    &:hover {
      border-color: #d5d3d3;
    }
  }
}
</style>
