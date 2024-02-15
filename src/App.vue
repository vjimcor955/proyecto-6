<template>
  <div>
    <Navbar :isLogged=isLogged @logout="handleLogout"/>
    <main>
      <router-view @login="handleLogin"/>
    </main>
    <Footer />
  </div>
</template>


<script>
  import Navbar from './components/shared/Navbar.vue'
  import Footer from './components/shared/Footer.vue'

  export default {
    name: 'App',
    components: { 
      Navbar,
      Footer
    },
    data() {
      return {
        isLogged: false,
      }
    },
    methods: {
      handleLogin() {
        this.isLogged = true
      },
      handleLogout() {
        this.isLogged = false
      }
    }
  }

</script>


<style scoped lang="scss">
  main {
    min-height: calc(100vh - 125px);
    font-family: "Afacad";
  }
</style>
