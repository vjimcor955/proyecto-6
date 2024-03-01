<template>
  <div class="general_ranking">
    <div class="general_ranking__search_bar">
      <h2 class="general_ranking__search_bar--title">Ranking General</h2>
      <p class="general_ranking__search_bar--description">Listado con todas las canciones y albumes registrados.</p>
    </div>
    <div class="general_ranking__song_list">
      <RankingCard
        v-for="(element, index) in ranking"
        :key="element.id"
        :position="index + 1"
        :type="element.type"
        :name="element.name"
        :artist="element.artist"
        :score="element.rating"
        />    
    </div>
  </div>
</template>


<script>
  import RankingCard from '../components/RankingCard.vue'
  import useAuthStore from '@/components/stores/authStore'
  import axios from 'axios'

  export default {
    name: 'GeneralRanking',
    data() {
      return {
        userRanking: null,
        ranking: [],
      }
    },
    components: {
      RankingCard,
    },
    methods: {
      parseUserRanking() {
        const userData = useAuthStore().user.ranking.songs
        // parse userRanking values to int
        userData.forEach(song => {
          song.id = parseInt(song.id)
          song.rating = parseInt(song.rating)
        })
        this.userRanking = userData
      },
      async getSongData(id) {
        const response = await axios.get(`http://localhost:80/api/songs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${useAuthStore().user.token}`
            }
          }
        )
        return response.data
      },
      async getAlbumData(id) {
        const response = await axios.get(`http://localhost:80/api/albums/${id}`,
          {
            headers: {
              Authorization: `Bearer ${useAuthStore().user.token}`
            }
          }
        )
        return response.data
      },
    },
    async created() {
      this.parseUserRanking()
      let elementData = null
      let showRanking = await Promise.all(this.userRanking.map(async (element, index) => {
        if (element.type === 'songs') {
          elementData = await this.getSongData(element.id);
          elementData.img = 'songs'
        } else if (element.type === 'albums') {
          elementData = await this.getAlbumData(element.id);
          elementData.img = 'albums'
        }
        const addElement = {
          id: elementData.id,
          type: elementData.img,
          name: elementData.name,
          artist: elementData.artist,
          rating: this.userRanking[index].rating
        };
        return addElement;
      }));
      // sort ranking by rating
      showRanking.sort((a, b) => b.rating - a.rating);
      this.ranking = showRanking;
    },
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