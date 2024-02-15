<template>
  <div class="loginRegister">
    <div class="form">
      <LoginForm v-if="!register" @login="login"/>
      <RegisterForm v-else />
      <a @click="register = !register">{{ !register ? 'Registrarse' : 'Iniciar sesión' }}</a>
    </div>
  </div>
</template>


<script>
  import LoginForm from '@/components/module/components/LoginForm.vue'
  import RegisterForm from '@/components/module/components/RegisterForm.vue'

  export default {
    data() {
      return {
        register: false
      }
    },
    components: {
      LoginForm,
      RegisterForm
    },
    methods: {
      login() {
        this.$emit('login')
      }
    }
  }
</script>


<style scoped lang="scss">
  .loginRegister {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form {
      min-height: 425px;
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 5px 25px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

      a {
        font-size: 1.1em;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
</style>