<template>
   <div class="h-100">
      <Header />
      <main class="d-flex align-items-center">
         <Main :artists="artists" />
      </main>
   </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
   name: "App",
   components: {
      Header,
      Main,
   },
   data() {
      return {
         artists: [],
      };
   },
   methods: {
      getArtists() {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            this.artists = res.data.response;
         });
      },
   },
   mounted() {
      this.getArtists();
   },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

main {
   height: calc(100vh - 80px);
}
</style>
