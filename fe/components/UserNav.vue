<template>
  <div class="user-nav">
    <button v-if="!loggedIn" @click="handleLogin">Login</button>
    <div v-else>
      <span>Hi, {{ user.name }}!</span>
      <span><button @click="handleLogout">Logout</button></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
  data() {
    return {
      user: this.$store.state.auth.user,
      loggedIn: this.$store.state.auth.loggedIn,
    }
  },
  methods: {
    async handleLogin() {
      await this.$auth.loginWith('passport')
    },
    async handleLogout() {        
      await this.$auth.logout()
    },
  },
}
</script>
