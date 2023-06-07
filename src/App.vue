<template>
  <NavHeader />
  <router-view></router-view>
</template>

<script>
import NavHeader from "./components/NavHeader/NavHeader.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    // WelcomePage
    NavHeader,
  },
  mounted(){
    axios.get("http://localhost:3000/markers").then((response) =>{
      this.$store.dispatch("changeMarkers", response.data);
      console.log(this.$store)
    })
  }
};
</script>

<style lang="scss">
#body {
  min-height: 98vh;
  // background-color: #303240;
  background-color: #243043;
}
</style>
