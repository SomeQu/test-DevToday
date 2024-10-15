<template>
    <slot v-if="!pending">
    </slot>
    <p v-else-if="pending">Loading...</p>
  
  </template>
  
  <script setup lang="ts">
  const { $state,$fetcher } = useNuxtApp();
  const pending = ref(true);
  onMounted(async() => {
    try {
      $state.state.allCountries =await $fetcher.fetchAvailableCountries('AvailableCountries'); 
      $state.state.randomCountries = $state.state.allCountries.sort(() => 0.5- Math.random()).slice(0,3);
    } catch (err) {
      console.log(err)
    } finally {
      pending.value = false; 
    }
  });
  </script>