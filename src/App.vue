<template>
   <div class="h-100">
      <Header :generes-array="genre" :authors-array="authors" @genre-search="getSelectedGenre" @author-search="getSelectedAuthor" />
      <main class="d-flex align-items-center justify-content-center">
         <div v-if="loader"><h1 class="text-white">CARICAMENTO</h1></div>
         <Main v-else :artists="songsShowed" :selected-genre="searchGenre" :selected-author="searchAuthor" />
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
         authors: [],
         searchGenre: "",
         searchAuthor: "",
      };
   },
   computed: {
      genreArray() {
         return this.genre;
      },
      songsShowed() {
         return this.artists.filter((song) => {
            if (!this.searchGenre && !this.searchAuthor) {
               return true;
            } else if (!this.searchGenre && this.searchAuthor) {
               if (song.author === this.searchAuthor) {
                  return true;
               }
            } else if (this.searchGenre && !this.searchAuthor) {
               if (song.genre === this.searchGenre) {
                  return true;
               }
            } else {
               if (song.genre === this.searchGenre && song.author === this.searchAuthor) {
                  return true;
               }
            }
         });
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
      getArrayFromApi(arrayName, key) {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            res.data.response.forEach((item) => {
               if (!arrayName.includes(item[key])) {
                  arrayName.push(item[key]);
               }
            });
         });
      },
      getSelectedGenre(term) {
         this.searchGenre = term;
      },
      getSelectedAuthor(term) {
         this.searchAuthor = term;
      },
   },
   mounted() {
      this.getArtists();
      this.getArrayFromApi(this.genre, "genre");
      this.getArrayFromApi(this.authors, "author");
   },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

main {
   height: calc(100vh - 80px);
}
</style>
