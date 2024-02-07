<template>
  <header class="header">
    <h3 class="header__title">Music App</h3>
    <div class="header__navbar">
      <div class="header__navbar_links">
        <router-link to="/" class="header__navbar_links--link">Home</router-link>
        <router-link to="/contact" class="header__navbar_links--link">Contactanos</router-link>
        <!-- Ternario que muestre el resto de links si el usuario está logueado -->
        <!-- <router-link to="/general-ranking" class="header__navbar_links--link">Ranking general</router-link> -->
        <!-- <router-link to="/lists" class="header__navbar_links--link">Mis listas</router-link> -->
        <!-- <router-link to="/user" class="header__navbar_links--link">Usuario</router-link> -->
        <!-- <router-link to="/create-element" class="header__navbar_links--link white_button" id="add_song">Añadir canción/álbum</router-link> -->
      </div>
      <div class="header__navbar_buttons">
        <router-link to="/login" class="header__navbar_buttons--login white_button">Login</router-link>
        <router-link to="/login" class="header__navbar_buttons--register black_button">Register</router-link>
      </div>
    </div>
  </header>
</template>


<script>

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
      width: 50%;
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