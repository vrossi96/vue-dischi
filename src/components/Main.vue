<template>
   <div class="container">
      <div class="row">
         <div class="card text-center">
            <img :src="artists[0].poster" :alt="artists[0].author" />
            <p class="song-name text-white text-uppercase">{{ artists[0].title }}</p>
            <div class="auth-year">
               <p>{{ artists[0].author }}</p>
               <p>{{ artists[0].year }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Main",
   props: ["artists"],
};
</script>

<style scoped lang="scss">
.card {
   width: calc(100% / 5);
   height: 400px;
   padding: 15px;
   background-color: #2e3a46;
   border: none;

   p {
      margin-bottom: 0;
   }

   .song-name {
      font-size: 20px;
      font-weight: bold;
      margin-top: 15px;
      margin-bottom: 20px;
   }

   .auth-year {
      font-size: 16px;
      color: #687074;
   }
}
</style>
