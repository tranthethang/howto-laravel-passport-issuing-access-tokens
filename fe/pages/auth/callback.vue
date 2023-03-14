<template>
  <div class="wrap">
    <p><code>accessToken</code><textarea v-model="accessToken"></textarea></p>
    <p><code>refreshToken</code><textarea v-model="refreshToken"></textarea></p>
  </div>
</template>

<script>
export default {
  name: 'CallbackPage',
  data() {
    return {
      accessToken: '',
      refreshToken: ''
    }
  },
  async created() {
    try {
      const response = await this.getToken();
      this.accessToken = response?.data?.access_token
      this.refreshToken = response?.data?.refresh_token
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  methods: {
    getToken: async function () {
      return await this.$axios.post('/api/oauth/token', {
        grant_type: 'authorization_code',
        client_id: '1',
        client_secret: 'OKMAlsMykapbuNJ2kvc320cpYZdRmwD0JcMbdFWQ',
        redirect_uri: 'http://127.0.0.1:3000/auth/callback',
        code: this.$route.query?.code
      });
    }
  }
}
</script>
<style scoped>
.wrap {
  width: calc(960 / 1960 * 100%);
  min-width: 460px;
  margin: 0 auto;
}
code {
  display: inline-block;
  font-size: 12px;
  background-color: #ffffff;
  color: coral;
  padding: 5px;
  border: 1px solid #aaaaaa;
  border-bottom: none;
}
textarea {
  resize: horizontal;
  width: 100%;
  border: 1px solid #aaa;
  padding: 10px 5px;
  min-height: 150px;
  font-size: 11px;
  line-height: 15px;
  color: #555;
  outline: none;
}
</style>
