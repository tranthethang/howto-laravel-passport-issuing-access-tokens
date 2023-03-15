<template>
  <div class="user-nav">
    <button @click="handleClick">Login</button>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$auth.loginWith('passport')
    },
  },
}
</script>
