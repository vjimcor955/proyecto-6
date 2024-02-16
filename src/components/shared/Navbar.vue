<template>
  <header class="header">
    <h3 class="header__title">Music App</h3>
    <div class="header__navbar">
      <div class="header__navbar_links">
        <router-link :to="{name: 'root-home'}" class="header__navbar_links--link">Home</router-link>
        <router-link :to="{name: 'contact'}" class="header__navbar_links--link">Contactanos</router-link>
        <!-- Links below only shown if user logged -->
        <router-link :to="{name: 'general-ranking'}" class="header__navbar_links--link" v-if="isLogged">Ranking general</router-link>
        <router-link :to="{name: 'lists'}" class="header__navbar_links--link" v-if="isLogged">Mis listas</router-link>
        <router-link :to="{name: 'private-user'}" class="header__navbar_links--link" v-if="isLogged">Usuario</router-link>
        <router-link :to="{name: 'create-element'}" class="header__navbar_links--link white_button" id="add_song" v-if="isLogged">Añadir canción/álbum</router-link>
      </div>
      <div class="header__navbar_buttons">
        <!-- If user is not logged, show login button, else show logout button -->
        <router-link :to="{name: 'login'}" class="header__navbar_buttons--login white_button" v-if="!isLogged">Login / Register</router-link>
        <router-link :to="{name: 'root-home'}" class="header__navbar_buttons--logout black_button" @click="handleLogout" v-else>Logout</router-link>
      </div>
    </div>
  </header>
</template>


<script>
  export default {
    props: {
      isLogged: {
        type: Boolean,
        default: false
      } 
    },
    methods: {
      handleLogout() {
        // set isLogged to false
        this.$emit('logout')
      }
    }
  }
</script>


<style scoped lang="scss">
  .header {
    font-family: "Afacad";
    height: 80px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f1f1;

    &__title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    &__navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      gap: 50px;

      &_links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 50px;
        width: 100%; 
        
        &--link {
          text-decoration: none;
          color: #000;
        }

        &--link:hover {
          text-decoration: underline;
        }
      } 
  
      &_buttons {
        display: flex;
        gap: 25px;
      }
    }

  }

  .router-link-active.router-link-exact-active {
    text-decoration: underline;
  }

</style>