<template>
  <div class="layout_root">
    <router-view />
  </div>
</template>

<script>
  import useAuthStore from '@/components/stores/authStore';

  export default {
    name: 'LayoutPrivate',
    computed: {
      isLogged() {
        return useAuthStore().isLogged
      }
    },
    // If user is not logged cant access to layoutPrivate, redirect to login page
    created() {
      if (!this.isLogged) {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .layout_root {
    min-height: calc(100vh - 125px);
    font-family: "Afacad";
  }
</style>