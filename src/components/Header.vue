<template>
   <header class="d-flex align-items-center">
      <img class="d-block" src="../assets/img/spotify-logo.png" alt="Spotify Logo" />
   </header>
</template>

<script>
export default {
   name: "Header",
   props: {},
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
