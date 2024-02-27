<template>
  <div class="list_card">
    <div class="list_card__header">
      <p class="list_card__header--name">Nombre: {{ listName }}</p>
      <span>/</span>
      <p class="list_card__header--num_songs">Canciones: {{ songsList.length }}</p>
    </div>
    <div class="list_card--list_songs">
      <SongCard
        v-for="(song, index) in songsList"
        :key="index"
        :imgSrc="song.img"
        :songName="song.name"
      />
    </div>
  </div>
</template>


<script>
  import SongCard from './SongCard.vue';

  export default {
    name: 'ListCard',
    components: {
      SongCard
    },
    props: {
      listName: {
        type: String,
        required: true
      },
      songsList: {
        type: Array,
        required: true
      },
    }
  }
</script>


<style lang="scss">
  .list_card {
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 1px solid rgb(128, 128, 128, 0.5);
    
    &__header {
      display: flex;
      gap: 20px;
      
      &--name, span, &--num_songs {
        font-size: 1.4rem;
        font-weight: 600;
        padding: 10px;
      }
    }

    &--list_songs {
      display: flex;
      gap: 10px;
    }
  }
</style>