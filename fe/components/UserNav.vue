<template>
  <div class="user-nav">
    <button v-if="!loggedIn" class="is-primary" @click="handleLogin">
      Login
    </button>
    <div v-else>
      <span>Hi, {{ user.name }}!</span>
      <span><button @click="handleLogout">Logout</button></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserNav',
  data() {
    return {}
  },
  computed: {
    ...mapState('auth', {
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
    }),
  },
  methods: {
    async handleLogin() {
      await this.$auth.loginWith('passport')
    },
    async handleLogout() {
      await this.$auth.logout()
      this.user = {}
      this.loggedIn = false
      await this.$router.push({ path: '/' })
    },
  },
}
</script>
