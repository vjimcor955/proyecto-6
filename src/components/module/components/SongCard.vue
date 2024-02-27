<template>
  <div class="song__card">
    <div class="song__card--img">
      <img :src="imgSrc" alt="song image" />
    </div>
    <p class="song__card--name">{{ songName }}</p>
  </div>
</template>


<script>
  export default {
    name: 'ListCard',
    props: {
      imgSrc: {
        type: String,
      },
      songName: {
        type: String,
        required: true
      },
    }
  }
</script>


<style lang="scss">
  .song__card {
    max-width: fit-content; 
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid rgb(128, 128, 128, 0.5);
    
    &--img {
      width: 100px;
      height: 100px;
  
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    &--name {
      text-align: center;
    }
  }
</style>