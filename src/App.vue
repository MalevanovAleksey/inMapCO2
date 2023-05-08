<template>
  <NavHeader />
  <router-view></router-view>
</template>

<script>
import NavHeader from "./components/NavHeader/NavHeader.vue";

export default {
  name: "App",
  components: {
    // WelcomePage
    NavHeader,
  },
};
</script>

<style lang="scss">
#body {
  min-height: 98vh;
  // background-color: #303240;
  background-color: #243043;
}
</style>
