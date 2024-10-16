<template>
  <div class="wrapper">
    <div class="container">
      <div class="mainList">
        <Searcher />
        <div class="title">Countries List</div>
        <MainList />
      </div>
      <div class="randomList">
        <div class="title">Random Countries</div>
        <RandomList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $state } = useNuxtApp();
</script>

<style lang="scss">
.title {
  font-size: 24px;
  color: #aaa;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    align-items: baseline;
    justify-content: center;

    gap: 100px;
    .mainList,
    .randomList {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 20px;
    }
  }
}
</style>
