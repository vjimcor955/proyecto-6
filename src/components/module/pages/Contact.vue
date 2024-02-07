<template>
  <div class="contact">
    <div class="contact__header">
      <h2 class="contact__header--title">CONTACTANOS</h2>
      <p class="contact__header--message">Si tienes alguna pregunta o sugerencia no dudes en compartirla, completa el formulario para ponerte en contacto con nosotros.</p>
    </div>
    <form class="contact_form">
      <div class="contact_form--field">
        <label for="email">Correo electrónico:</label>
        <input v-model="email" type="email" name="email" id="email">
      </div>
      <p v-if="emailError" class="validation">Email incorrecto</p>
      <div class="contact_form--field">
        <label for="text">¿En que podemos ayudarle?:</label>
        <textarea v-model="text" name="text"></textarea>
      </div>
      <p v-if="textError" class="validation">Mensaje vacio</p>
      <input type="submit" value="Enviar" v-bind:disabled="buttonDisabled" class="white_button">
    </form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        email: null,
        text: null,
        emailError: false,
        textError: false,
        buttonDisabled: true,
      }
    },
    watch: {
      email(value) {
        this.validateEmail(value)
        this.checkButton()
      },
      text(value) {
        this.validateText(value)
        this.checkButton()
      }
    },
    methods: {
      // Function that validates the email
      validateEmail(email) {
        const re = /\S+@\S+\.\S+/
        if (!re.test(email)) {
          this.emailError = true
          return false
        }
        this.emailError = false
        return true
      },
      // Function that validates the text
      validateText(text) {
        if (text == '') {
          this.textError = true
          return false
        }
        this.textError = false
        return true
      },
      // Function that enables the button if the email and the text are valid
      checkButton() {
        if (this.validateEmail(this.email) && this.validateText(this.text)) return this.buttonDisabled = false
        this.buttonDisabled = true
      },
    }
  }
</script>


<style lang="scss">
  .contact {
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;

    .contact__header {
      height: 350px;
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: left;
      gap: 50px;

      &--title {
        margin-top: 50px;
        font-size: 2rem;
        font-weight: bolder;
      }

      &--message {
        font-size: 1.1rem;
      }
    } 

    .contact_form {
      min-height: 350px;
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 25px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

      &--field {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 10px;
        
        input[type="email"] {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
  
        textarea {
          height: 100px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          resize: none;
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
    }
  }
  
  
</style>