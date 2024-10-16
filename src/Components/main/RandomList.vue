<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { INuxtApp } from "~/src/Types/types";
const { $state, $fetcher } = useNuxtApp() as INuxtApp;

const publicHolidays = ref<any[] | undefined>([]);

const fetchHolidays = async () => {
  try {
    const countryCode = $state?.state.randomCountries[0].countryCode;
    publicHolidays.value = await $fetcher?.fetchAvailableCountries(
      `NextPublicHolidays/${countryCode}`,
    );
    console.log(publicHolidays);
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchHolidays);
</script>

<template>
  <div class="countriesList random" v-if="publicHolidays?.length">
    <div
      class="country"
      v-for="(country, index) in $state?.state.randomCountries"
      :key="index"
    >
      {{ country.name }}

      <span>
        {{ publicHolidays[index].name }}
      </span>
      <span>
        {{ publicHolidays[index].date }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.countriesList {
  width: 100%;
  &.random {
    .country {
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
