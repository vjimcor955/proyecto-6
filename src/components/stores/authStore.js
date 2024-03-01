import {defineStore} from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {
      name: '',
      email: '',
      user: '',
      password: '',
      token: '',
      ranking: {},
      lists: {},
    },
    isLogged: false,
  }),
  actions: {
    logIn(user) {
      this.user = {
        name: user.name,
        email: user.email,
        user: user.user,
        password: user.password,
        token: user.token,
        ranking: user.ranking,
        lists: user.lists
      }
      this.isLogged = true
    },
    logOut() {
      this.user = {
        name: '',
        email: '',
        user: '',
        password: '',
        token: '',
        ranking: {},
        lists: {}
      }
      this.isLogged = false
    },
    updateUserRanking(ranking) {
      this.user.ranking = ranking
    }
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