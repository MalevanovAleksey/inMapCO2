<template>
  <div class="container">
    <SummonsInfo></SummonsInfo>
    <YandexMap />
  </div>
</template>

<script>
import SummonsInfo from "./Section/SummonsInfo.vue";
import YandexMap from "./YandexMap.vue";
// import { yandexMap } from 'vue-yandex-maps'
export default {
  components: {
    SummonsInfo,
    YandexMap,
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
}
</style>
