<script setup lang="ts">
import type { INuxtApp } from "~/src/Types/types";

const { $fetcher } = useNuxtApp() as INuxtApp;
const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
const currentYear = ref(new Date().getFullYear());
const currentHolidays = ref<any>([]);
const route = useRoute();
console.log(currentYear);
const chooseYear = (year: number) => {
  currentYear.value = year;
};

const fetchHolidays = async () => {
  try {
    currentHolidays.value = await $fetcher?.fetchAvailableCountries(
      `PublicHolidays/${currentYear.value}/${route.params.id}`,
    );
    console.log(currentHolidays.value);
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  fetchHolidays();
});

watch(currentYear, (newYear) => {
  fetchHolidays();
});
</script>

<template>
  <div class="wrapper">
    <div class="container-country">
      <div class="title">Country</div>
      <NuxtLink to="/" class="back"> Go Back </NuxtLink>
      <div class="countriesList main solo" v-if="currentHolidays">
        <div
          class="country"
          v-for="(country, index) in currentHolidays"
          :key="index"
        >
          <span>
            {{ country.localName }}
          </span>
          <span>
            {{ country.date }}
          </span>

          <!-- <span>
        {{ publicHolidays[index].name }} 
      </span>
      <span>

          {{ publicHolidays[index].date }}
        </span> -->
        </div>
      </div>
      <div class="years">
        <button
          class="year"
          v-for="year in years"
          :class="{ active: year === currentYear }"
          v-on:click="chooseYear(year)"
        >
          {{ year }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .container-country {
    gap: 20px;
    display: flex;
    flex-direction: column;
    .back {
      color: #e6007a;
      text-decoration: none;
      font-size: 16px;
    }
    .countriesList {
      &.solo {
        .country {
          display: flex !important;
          flex-direction: column !important;
        }
      }
    }
    .years {
      display: flex;
      gap: 5px;
      .year {
        color: white;
        border: 1px solid #e6007a;
        border-radius: 4px;
        padding: 10px;
        background: linear-gradient(60deg, #e6007a, #d70072, #ff0187);
        transition: 0.5s all;
        &.active {
          background: transparent;
          color: #e6007a;
        }
        &:hover {
          background: transparent;
          color: #e6007a;
        }
      }
    }
  }
}
</style>
