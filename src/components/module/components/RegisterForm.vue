<template>
  <div class="register">
    <h2>Registrarse</h2>
    <form class="register_form">
      <div class="register_form--field">
        <label for="nameRegister">Nombre:</label>
        <input v-model="registerData.name" type="text" name="nameRegister" id="nameRegister">
      </div>
      <p v-if="nameError" class="validation">El nombre solo admite letras</p>
      <div class="register_form--field">
        <label for="emailRegister">Correo electronico:</label>
        <input v-model="registerData.email" type="email" name="emailRegister" id="emailRegister">
      </div>
      <p v-if="emailError" class="validation">Email incorrecto</p>
      <div class="register_form--field">
        <label for="userRegister">Usuario:</label>
        <input v-model="registerData.user" type="text" name="userRegister" id="userRegister">
      </div>
      <p v-if="userError" class="validation">El usuario solo admite letras y numeros</p>
      <div class="register_form--field">
        <label for="passwordRegister">Contraseña:</label>
        <input v-model="registerData.password" type="text" name="passwordRegister" id="passwordRegister">
      </div>
      <p v-if="passwordError" class="validation">La contraseña debe ser de minimo 8 caracteres, conteniendo una letra, un número y un carácter especial</p>
      <input type="submit" value="Registrarse" v-bind:disabled="registerButtonDisabled" class="white_button" @click="handleRegister">
      <p v-if="registered" class="confirmation">Registrado correctamente</p>
    </form>    
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        registerData: {
          name: null,
          email: null,
          user: null,
          password: null,
        },
        nameError: false,
        emailError: false,
        userError: false,
        passwordError: false,
        registerButtonDisabled: true,
        registered: false,
      }
    },
    watch: {
      'registerData.name'() {
        this.validateInput('name', this.registerData.name);
        this.check_registerButton()
      },
      'registerData.email'() {
        this.validateInput('email', this.registerData.email);
        this.check_registerButton()
      },
      'registerData.user'() {
        this.validateInput('user', this.registerData.user);
        this.check_registerButton()
      },
      'registerData.password'() {
        this.validateInput('password', this.registerData.password);
        this.check_registerButton()
      },     
    },
    methods: {
      // Function that validates the inputs in the register form
      validateInput(type, value) {
        let re;
        switch (type) {
          case 'name':
            // Name only contains letters
            re = /^[a-zA-Z\s]*$/;
            this.nameError = !re.test(value);
            break;
          case 'email':
            // Email validation
            re = /\S+@\S+\.\S+/;
            this.emailError = !re.test(value);
            break;
          case 'user':
            // Name only contains letters and numbers
            re = /^[a-zA-Z0-9]*$/;
            this.userError = !re.test(value);
            break;
          case 'password':
            // Minimum eight characters, at least one letter, one number and one special character
            re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            this.passwordError = !re.test(value);
            break;
        }
        return !this[type + 'Error'];
      },
      // Function that enables the button if the register fields are valid
      check_registerButton() {
        if (!this.nameError && !this.emailError && !this.userError && !this.passwordError) return this.registerButtonDisabled = false
        this.registerButtonDisabled = true
      },
      async handleRegister(e) {
        e.preventDefault()
        try {
          const response = await axios.post('http://localhost:80/api/register', this.registerData);
          this.registered = true
          setTimeout(() => {
            this.$router.push({ name: 'home' });
          }, 1000);
        } catch (error) {
          console.error(error)
        }
      },
    }
  }
</script>



<style scoped lang="scss"> 
  .register { 
    h2 {
      text-align: center;
      font-size: 1.5em;
      margin: 15px;
    }
  }
  .register_form {
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
</style>