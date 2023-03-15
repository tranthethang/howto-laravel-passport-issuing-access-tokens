<template>
  <div>loading..</div>
</template>

<script>
export default {
  name: 'CallbackPage',
  async created() {
    try {
      const response = await this.getToken()
      await this.$auth.setUserToken(
        response?.data?.access_token,
        response?.data?.refresh_token
      )
      await this.$auth.fetchUserOnce()
      await this.$router.push({ path: '/profile' })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  methods: {
    getToken: async function () {
      const { clientId, clientSecret, redirectUri } = process.env.oauth2

      return await this.$axios.post('/backend/oauth/token', {
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code: this.$route.query?.code,
      })
    },
  },
}
</script>
