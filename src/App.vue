<template>
  <div>
    <Navbar />
    <main>
      <router-view />
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
    }
  }

</script>


<style scoped lang="scss">
  main {
    min-height: calc(100vh - 125px);
    font-family: "Afacad";
  }
</style>
