<template>
  <div class="wrap">
    <button @click="handleLogin">Click here to login</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  methods: {
    handleLogin() {
      this.$auth.loginWith('passport')
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
