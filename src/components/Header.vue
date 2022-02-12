<template>
   <header class="d-flex align-items-center justify-content-between">
      <img class="d-block" src="../assets/img/spotify-logo.png" alt="Spotify Logo" />
      <select name="genre" id="genre" v-model="genreValue" @input="$emit('genre-search', $event.target.value)">
         <option value="">Seleziona genere</option>
         <option v-for="genre in generesArray" :key="genre" :value="genre">{{ genre }}</option>
      </select>
   </header>
</template>

<script>
export default {
   name: "Header",
   props: ["generesArray"],
   data() {
      return {
         genreValue: "",
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
}
</style>
