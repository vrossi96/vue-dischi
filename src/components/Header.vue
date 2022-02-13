<template>
   <header class="d-flex align-items-center justify-content-between">
      <img class="d-block" src="../assets/img/spotify-logo.png" alt="Spotify Logo" />
      <div class="options-block">
         <select name="genre" id="genre" v-model="genreValue" @input="$emit('genre-search', $event.target.value)">
            <option value="">Seleziona genere</option>
            <option v-for="genre in generesArray" :key="genre" :value="genre">{{ genre }}</option>
         </select>
         <select name="author" id="author" v-model="authorValue" @input="$emit('author-search', $event.target.value)">
            <option value="">Seleziona per autore</option>
            <option v-for="author in authorsArray" :key="author" :value="author">{{ author }}</option>
         </select>
      </div>
   </header>
</template>

<script>
export default {
   name: "Header",
   props: ["generesArray", "authorsArray"],
   data() {
      return {
         genreValue: "",
         authorValue: "",
      };
   },
   mounted() {},
};
</script>

<style scoped lang="scss">
header {
   height: 80px;
   background-color: #2e3a46;

   img {
      height: 80%;
      margin-left: 8px;
   }

   .options-block {
      margin-right: 8px;
      select {
         background-color: #1e2d3b;
         color: white;
         text-transform: uppercase;

         &:first-child {
            border-radius: 5px 0 0 5px;
         }
         &:last-child {
            border-radius: 0 5px 5px 0;
         }
      }
   }
}
</style>
