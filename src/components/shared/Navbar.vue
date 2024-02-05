<template>
  <header class="header">
    <h3 class="header__title">Music App</h3>
    <div class="header__navbar">
      <div class="header__navbar_links">
        <router-link to="/" class="header__navbar_links--link">Home</router-link>
        <!-- Ternario que muestre el resto de links si el usuario está logueado -->
        <!-- <router-link to="/ranking-general" class="header__links--link">Ranking general</router-link> -->
        <!-- <router-link to="/listas" class="header__links--link">Mis listas</router-link> -->
        <!-- <router-link to="/user" class="header__links--link">Usuario</router-link> -->
        <!-- <router-link to="/crear-elemento" class="header__links--link">Añadir canción/álbum</router-link> -->
      </div>
      <div class="header__navbar_buttons">
        <router-link to="/login" class="header__navbar_buttons--login">Login</router-link>
        <router-link to="/login" class="header__navbar_buttons--register">Register</router-link>
      </div>
    </div>
  </header>
</template>


<script>

</script>


<style scoped lang="scss">
  .header {
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px;
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
      gap: 100px;

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
      } 
  
      &_buttons {
        display: flex;
        gap: 25px;
  
        &--login {
          background-color: #fff;
          border: 2px solid #000;
          color: #000;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }
  
        &--register {
          background-color: #000;
          border: 2px solid #000;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }
      }
    }

  }

  .router-link-active.router-link-exact-active {
    text-decoration: underline;
    // font-weight: bold;
  }

</style>