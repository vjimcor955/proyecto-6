<template>
  <div class="general_ranking">
    <div class="general_ranking__search_bar">
      <h2 class="general_ranking__search_bar--title">Ranking General</h2>
      <p class="general_ranking__search_bar--description">Listado con todas las canciones y albumes registrados.</p>
      <input type="text" name="search" id="search" class="general_ranking__search_bar--input">
      <div class="general_ranking__search_bar--buttons">
        <button class="navbar_button">Canciónes</button>
        <button class="navbar_button">Albumes</button>
      </div>
    </div>
    <div class="general_ranking__song_list">
      <RankingCard
        v-for="(song, index) in songsMap"
        :key="index"
        :position="index + 1"
        :imgSrc="song.imgSrc"
        :name="song.name"
        :artist="song.artist"
        :score="song.score"
      />    
    </div>
  </div>
</template>


<script>
  import RankingCard from '../components/RankingCard.vue'
  import songsMap from '@/api.js'

  export default {
    name: 'GeneralRanking',
    data() {
      return {
        songsMap
      }
    },
    components: {
      RankingCard,
      songsMap
    }
  }
</script>


<style scoped lang="scss">
  .general_ranking {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__search_bar{
      width: 100%;
      background-color: grey;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 35px 0px;
      gap: 20px;

      &--title {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
      }

      &--description {
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
      }

      &--input {
        width: 25%;
        padding: 10px;
        border-radius: 5px;
        border: none;
      }

      &--buttons {
        display: flex;
        gap: 25px;
      }
    }

    &__song_list {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: 50px 0px;
    }
  }   
</style>