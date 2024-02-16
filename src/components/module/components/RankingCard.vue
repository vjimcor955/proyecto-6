<template>
  <div class="ranking_card">
    <p class="ranking_card--position">#{{ position }}</p>
    <div class="ranking_card--img">
      <img :src=imgSrc alt="Imagen cancion">
    </div>
    <p class="ranking_card--name">{{ name }} - {{ artist }}</p>
    <p class="ranking_card--score">Puntuación: {{ score }}</p>
  </div>
</template>


<script>
  export default {
    props: {
      position: {
        type: Number,
        required: true
      },
      imgSrc: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: true
      },
      artist: {
        type: String,
        required: true
      },
      score: {
        type: Number,
        required: true
      }
    }
  }
</script>


<style lang="scss">
  .ranking_card {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid rgb(128, 128, 128, 0.5);

    &--position {
      text-align: center;
      width: 10%;
      font-size: 1.2rem;
      font-weight: bold;
    }

    &--img {
      text-align: center;
      width: 20%;

      img {
        width: 100px;
        height: 100px;
        border: 1px solid #000;
      }
    }

    &--name {
      text-align: center;
      width: 50%;
      font-size: 1.1rem;
    }

    &--score {
      text-align: center;
      width: 30%;
      font-size: 1.1rem;
    }
  }
</style>