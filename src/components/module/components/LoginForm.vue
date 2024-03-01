<template>
  <div class="login">
    <h2>Iniciar sesión</h2>
    <form class="login_form">
      <div class="login_form--field">
        <label for="userLogin">Usuario:</label>
        <input v-model="loginData.user" type="text" name="userLogin" id="userLogin">
      </div>
      <div class="login_form--field">
        <label for="passwordLogin">Contraseña:</label>
        <input v-model="loginData.password" type="password" name="passwordLogin" id="passwordLogin">
      </div>
      <input type="submit" value="Iniciar sesión" v-bind:disabled="loginButtonDisabled" class="white_button" @click="handleLogin">
      <p v-if="loginError" class="validation">Datos incorrectos</p>
      <p v-if="loggingIn" class="confirmation">Sesión iniciada correctamente</p>
    </form>
  </div>
</template>


<script>
  import {useAuthStore} from '@/components/stores/authStore'
  import axios from 'axios'  

  export default {
    data() {
      return {
        loginData: {
          user: null,
          password: null,
        },
        loginError: false,
        loggingIn: false,
        loginButtonDisabled: true,
      }
    },
    watch: {
      'loginData.password'() {
        this.check_loginButton()
      },
    },
    computed: {
      isLogged() {
        return useAuthStore().isLogged
      }
    },
    methods: {
      // Method that enables the button if the login fields are not null
      check_loginButton() {
        if (this.loginData.user && this.loginData.password) return this.loginButtonDisabled = false
        this.loginButtonDisabled = true
      },
      // Method that handles the login
      async handleLogin(e) {
        e.preventDefault()
        try {
          const response = await axios.post('http://localhost:80/api/login', this.loginData);
          const parsedRanking = JSON.parse(response.data.user.ranking)
          const user = {
            name: response.data.user.name,
            email: response.data.user.email,
            user: this.loginData.user,
            password: this.loginData.password,
            token: response.data.token,
            ranking: parsedRanking,
            lists: response.data.user.lists
          }
          console.log('USER', user)
          useAuthStore().logIn(user)
          this.loggingIn = true
          setTimeout(() => {
            this.$router.push({name: "general-ranking"});
          }, 1000);
        } catch (error) {
          console.error(error)
          this.loginError = true
          this.loggingIn = false
        }
      },
    }
  }
</script>



<style scoped lang="scss">
  .login { 
    h2 {
      text-align: center;
      font-size: 1.5em;
      margin: 15px;
    }
    .login_form {
      min-height: fit-content;
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 5px 25px;
      border-radius: 5px;

      &--field {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 10px;

        input {
          padding: 7px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      }
      .validation {
        border: 1px solid red;
        color: red;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        font-size: 0.9em;
      }
      .confirmation {
        border: 1px solid green;
        color: green;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        font-size: 0.9em;
      }
    }
  }

</style>