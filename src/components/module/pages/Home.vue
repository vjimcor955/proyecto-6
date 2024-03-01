<template>
  <div class="home">
    <div class="home__content">
      <h2 class="home__content--title">Bienvenido a la Music App</h2>
      <p class="home__content--message">Añade canciones o albumes para puntuarlos y acceder a tu arnking general u ordenarlos en listas personalizadas.</p>
      <router-link :to="{name: 'login'}" class="header__navbar_buttons--login white_button">Login / Register</router-link>
    </div>
    <img src="\src\assets\headphones.jpg" alt="Imagen home">
  </div>
</template>


<script>

</script>


<style lang="scss">
  .home {
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    .home__content {
      height: 350px;
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: left;
      gap:50px;

      &--title {
        margin-top: 50px;
        font-size: 2rem;
        font-weight: bolder;
      }

      &--message {
        font-size: 1.1rem;
      }

    } 

    img {
      width: 600px;
      height: 400px;
    }
  }
</style>