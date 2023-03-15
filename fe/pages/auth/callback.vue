<template>
  <div>loading..</div>
</template>

<script>
export default {
  name: 'CallbackPage',
  async created() {
    try {
      const response = await this.getToken()
      await this.$auth.strategy.token.set(response?.data?.access_token)
      await this.$auth.strategy.refreshToken.set(response?.data?.refresh_token)

      setTimeout(function () {
        this.$router.push('/')
      }, 1000)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  methods: {
    getToken: async function () {
      return await this.$axios.post('/backend/oauth/token', {
        grant_type: 'authorization_code',
        client_id: process.env.oauth2.clientId,
        client_secret: process.env.oauth2.clientSecret,
        redirect_uri: process.env.oauth2.redirectUri,
        code: this.$route.query?.code,
      })
    },
  },
}
</script>
