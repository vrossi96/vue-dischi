<template>
   <div class="container">
      <div class="row g-3">
         <div v-for="artist in artists" :key="artist.author" class="card text-center">
            <div class="img-cont">
               <img class="dsa img-fluid" :src="artist.poster" :alt="artist.author" />
            </div>
            <div class="card-text d-flex flex-column justify-content-between flex-grow-1">
               <p class="song-name text-white text-uppercase">{{ artist.title }}</p>
               <div class="auth-year">
                  <p>{{ artist.author }}</p>
                  <p>{{ artist.year }}</p>
               </div>
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
   width: calc(100% / 5 - 30px);
   padding: 10px;
   background-color: #2e3a46;
   border: none;
   margin: 15px 15px;
   transition: transform 0.5s;
   cursor: pointer;

   &:hover {
      transform: scale(1.1);
   }

   .img-cont {
      height: 60%;
      img {
         height: 100%;
         max-width: 100%;
      }
   }

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
