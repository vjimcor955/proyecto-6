<template>
  <div class="ranking_card">
    <p class="ranking_card--position">#{{ position }}</p>
    <div class="ranking_card--img">
      <span v-if="type === 'songs'" class="song"> CANCIÓN </span>
      <span v-else-if="type === 'albums'" class="album"> ALBUM </span>
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
      type: {
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
      display: flex;
      justify-content: center;
      width: 25%;
      
      span.song {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 165, 0, 0.5);
        color: orange;
        border: 3px solid orange;
        font-size: larger;
        font-weight:700;
      }

      span.album {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(135, 206, 250, 0.5);
        color: dodgerblue;
        border: 3px solid dodgerblue;
        font-size: larger;
        font-weight:700;
      }
    }

    &--name {
      text-align: center;
      width: 45%;
      font-size: 1.1rem;
    }

    &--score {
      text-align: center;
      width: 20%;
      font-size: 1.1rem;
    }
  }
</style>