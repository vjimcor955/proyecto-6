<template>
  <div class="lists">
    <div class="lists__header">
      <h2 class="lists__header--title">Mis Listas</h2>
      <p class="lists__header--description">Listas personalizadas de las canciones registradas.</p>
      <router-link :to="{name: 'create-list'}" class="header__navbar_buttons--login white_button">Crear nueva lista</router-link>
    </div>
    <div class="lists__lists">
      <ListCard
        v-for="(list, index) in songsMap"
        :key="index"
        :listName="list.name"
        :songsList="songsMap"
        />
    </div>
  </div>
</template>


<script>
  import ListCard from '@/components/module/components/ListCard.vue'
  import songsMap from '@/api.js'

  export default {
    name: 'Lists',
    data() {
      return {
        songsMap
      }
    },
    components: {
      ListCard,
      songsMap
    }
  }
</script>


<style scoped lang="scss">
  .lists {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 35px 0px;
      gap: 40px;

      &--title {
        font-size: 2rem;
        font-weight: 700;
      }

      &--description {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    &__lists {
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: 50px 0px;
    }
  }   
</style>