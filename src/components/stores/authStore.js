import {defineStore} from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    // user: {
    //   id: '',
    //   name: '',
    //   email: '',
    //   user: '',
    //   password: '',
    //   token: ''
    // },
    user: null,
    isLogged: false,
  }),
  actions: {
    logIn(user) {
      this.user = user
      this.isLogged = true
    },
    logOut() {
      this.user = null
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