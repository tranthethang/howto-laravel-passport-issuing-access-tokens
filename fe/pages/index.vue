<template>
  <div class="wrap">
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
import { stringify } from 'querystring'

export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  methods: {
    handleLogin() {
      const params = {
        client_id: process.env.oauth2.clientId,
        redirect_uri: process.env.oauth2.redirect,
        response_type: 'code',
        scope: '',
        state: '',
        prompt: '',
      }
      location.href =
        process.env.apiUrl + '/oauth/authorize?' + stringify(params)
    },
  },
}
</script>
<style scoped>
.wrap {
  width: calc(1280 / 1960 * 100%);
  min-width: 460px;
  margin: 0 auto;
}
button {
  display: inline-block;
  font-size: 12px;
  background-color: coral;
  color: #fff;
  padding: 5px 20px;
  border-radius: 3px;
  line-height: 20px;
  border: 1px solid chocolate;
  cursor: pointer;
  transition: 0.25s;
}
button:hover {
  opacity: 0.7;
  border-color: coral;
  background-color: #ffffff;
  color: chocolate;
}
</style>
