<template>
   <div class="h-100">
      <Header :generes-array="genre" />
      <main class="d-flex align-items-center justify-content-center">
         <div v-if="loader"><h1 class="text-white">CARICAMENTO</h1></div>
         <Main v-else :artists="artists" />
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
         loader: true,
         artists: [],
         genre: [],
      };
   },
   computed: {
      genreArray() {
         return this.genre;
      },
   },
   methods: {
      getArtists() {
         this.loader = true;
         axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            this.artists = res.data.response;
            this.loader = false;
         });
      },
      getGenres() {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            res.data.response.forEach((author) => {
               if (!this.genre.includes(author.genre)) {
                  this.genre.push(author.genre);
               }
            });
         });
      },
   },
   mounted() {
      this.getArtists();
      this.getGenres();
      console.log(this.genre);
   },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

main {
   height: calc(100vh - 80px);
}
</style>
