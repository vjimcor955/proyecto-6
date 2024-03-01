<template>
  <div class="create_element">
    <h2 class="create_element__title">Añadir</h2>
    <form class="create_element__form">
      <div class="create_element__form--buttons">
        <button class="navbar_button" :class="songSelected" @click="setSong">Canción</button>
        <button class="navbar_button" :class="albumSelected" @click="setAlbum">Album</button>
      </div>
      <div class="create_element__form--field">
        <label for="name">Nombre:</label>
        <input v-model="element.name" type="text" name="name" id="name">
        <p v-if="nameError" class="validation">El nombre solo admite letras y numeros</p>
      </div>
      <div class="create_element__form--field">
        <label for="artist">Artista:</label>
        <input v-model="element.artist" type="text" name="artist" id="artist">
        <p v-if="artistError" class="validation">El artista solo admite letras y numeros</p>
      </div>
      <div class="create_element__form--field">
        <label for="rating">Puntuación:</label>
        <input v-model="element.rating" type="text" name="rating" id="rating">
        <p v-if="ratingError" class="validation">La puntuación debe estar entre 0 y 10</p>
      </div>
      <button :disabled="buttonDisabled" @click="createElement" class="white_button">Crear</button>
      <p v-if="confirmation" class="confirmation">Elemento creado correctamente</p>
    </form>
  </div>
</template>


<script>
  import axios from 'axios'
  import useAuthStore from '@/components/stores/authStore'

  export default {
    name: 'CreateElement',
    data() {
      return {
        allElements: [],
        element: {
          type: null,
          name: null,
          artist: null,
          rating: null
        },
        buttonDisabled: true,
        songSelected: '',
        albumSelected: '',
        nameError: false,
        artistError: false,
        ratingError: false,
        confirmation: false,
        userRanking: useAuthStore().user.ranking
      }
    },
    methods: {
      check_Button() {
        if (this.element.type && !this.artistError && !this.ratingError && !this.passwordError) return this.buttonDisabled = false
        this.buttonDisabled = true
      },
      setSong(e) {
        e.preventDefault();
        this.element.type = 'songs'
        this.songSelected = 'selected';
        this.albumSelected = '';
      },
      setAlbum(e) {
        e.preventDefault();
        this.element.type = 'albums';
        this.albumSelected = 'selected';
        this.songSelected = '';
      },
      validateInput(type, input) {
        const regex = {
          name: /^[a-zA-Z0-9\s]*$/,
          artist: /^[a-zA-Z0-9\s]*$/,
          rating: /^(?:[0-9]|10)$/          
        }
        if (regex[type].test(input)) {
          this[`${type}Error`] = false
        } else {
          this[`${type}Error`] = true
        }
      },
      async createElement(e) {
        e.preventDefault();
        const postElement = {
          name: this.element.name,
          artist: this.element.artist,
        }

        // check if the element exists
        const songExists = await this.checkSong(postElement)
        const albumExists = await this.checkAlbum(postElement)
        if (!songExists.exists || !albumExists.exists) {
          try {
            const response = await axios.post(`http://localhost:80/api/${this.element.type}`,
              postElement, 
              {
                headers: {
                  Authorization: `Bearer ${useAuthStore().user.token}`
                }
              }
            );
            const addToRanking = {
              id: response.data.id.toString(),
              type: this.element.type,
              rating: this.element.rating
            }
            this.userRanking.songs.push(addToRanking)
            this.updateUser()
          } catch (error) {
            console.error(error)
          }
        } else {
          let addToRankingId = null
          if (this.element.type === 'songs') {
            addToRankingId = songExists.id
          } else if (this.element.type === 'albums') {
            addToRankingId = albumExists.id
          }
          const addToRanking = {
            id: addToRankingId.toString(),
            type: this.element.type,
            rating: this.element.rating
          }
          this.userRanking.songs.push(addToRanking)
          this.updateUser()
        }     
        this.confirmation = true
        setTimeout(() => {
          // push to ranking page by its name
          this.$router.push({ name: 'general-ranking' });
        }, 1000);
      },
      async checkSong(element) {
        const allSongs = await axios.get(`http://localhost:80/api/songs`,
          {
            headers: {
              Authorization: `Bearer ${useAuthStore().user.token}`
            }
          }
        )
        let info = {
          exists: false,
          id: null
        }
        allSongs.data.forEach((song) => {
          if (song.name === element.name && song.artist === element.artist) {
            info.exists = true
            info.id = song.id
          }
        })
        return info
      },
      async checkAlbum(element) {
        const allAlbums = await axios.get(`http://localhost:80/api/albums`,
          {
            headers: {
              Authorization: `Bearer ${useAuthStore().user.token}`
            }
          }
        )
        let info = {
          exists: false,
          id: null
        }        
        allAlbums.data.forEach((album) => {
          if (album.name === element.name && album.artist === element.artist) {
            info.exists = true
            info.id = album.id
          }
        })
        return info
      },
      updateUser() {
        useAuthStore().updateUserRanking(this.userRanking)
        axios.put(`http://localhost:80/api/users/${useAuthStore().user.id}`,
          {
            "ranking": JSON.stringify(this.userRanking),
            "lists": "{}"
          },
          {
            headers: {
              Authorization: `Bearer ${useAuthStore().user.token}`
            }
          }
        )
      }
    },
    watch: {
      'element.type'() {
        this.check_Button()
      },
      'element.name'() {
        this.validateInput('name', this.element.name);
        this.check_Button()
      },
      'element.artist'() {
        this.validateInput('artist', this.element.artist);
        this.check_Button()
      },
      'element.rating'() {
        this.validateInput('rating', this.element.rating);
        this.check_Button()
      }
    }
  }
</script>


<style scoped lang="scss">
  .create_element {
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
      gap: 10px;
      max-width: 300px;
      padding: 25px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      &--buttons {
        display: flex;
        gap: 15px;

        button {
          color: black;
          border: #000 1px solid;
        }
        button.selected {
          text-decoration: underline;
          font-weight: 600;
          border: #000 2px solid;
        }
      }

      &--field {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        label {
          margin-bottom: 10px;
        }

        input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
      }

      .validation {
        border: 1px solid red;
        color: red;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        font-size: 0.8em;
      }
      .confirmation {
        border: 1px solid green;
        color: green;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        font-size: 0.8em;
      }
    }
  }
</style>