import {defineStore} from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {
      name: '',
      email: '',
      user: '',
      password: '',
      token: ''
    },
    // user: null,
    isLogged: false,
  }),
  actions: {
    logIn(user) {
      this.user = {
        name: user.name,
        email: user.email,
        user: user.user,
        password: user.password,
        token: user.token
      }
      this.isLogged = true
    },
    logOut() {
      this.user = {
        name: '',
        email: '',
        user: '',
        password: '',
        token: ''
      }
      this.isLogged = false
    },
  },
  persist: {
    enabled: true,
    strategies : [
      {
        key: "auth",
        storage: localStorage,
      }
    ]
  }
})

export default useAuthStore