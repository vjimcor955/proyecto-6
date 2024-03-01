<template>
  <div class="create_list">
    <h2 class="create_list__title">Crear lista</h2>
    <form class="create_list__form">
      <div class="create_list__form--field">
        <label for="name">Nombre:</label>
        <input v-model="name" type="text" name="name" id="name">
      </div>
      <div class="create_list__form--field">
        <label for="song">Canciones:</label>
        <div v-for="(index, song) in songs" class="song_selects">
          <select name="song" id="song">
            <!-- all songs from database -->
            <option value="1">Ejemplo</option>
          </select>
        </div>
        <button class="add_song_button" on-click="addSong">Añadir canción</button>
      </div>
      <button type="submit" class="white_button">Crear</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'CreateList',
    data() {
      return {
        songs: [''],
      }
    },
    methods: {
      addSong(e) {
        e.preventDefault()
        this.songs.push('')
      },
      createList() {
        // create list
      },
    }
  }
</script>


<style scoped lang="scss">
  .create_list {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &__title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
    }

    &__form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 25px;
      max-width: 300px;
      padding: 25px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      &--field {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
          margin-bottom: 10px;
        }

        input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .song_selects {
          select {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }
        }
        .add_song_button {
          margin-top: 10px;
          padding: 10px;
          text-decoration: underline;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

      }
    }
  }
</style>