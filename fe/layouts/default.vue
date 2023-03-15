<template>
  <section class="screen">
    <header class="site-header">
      <h1 class="site-name">Nuxt &hearts; OAuth2</h1>
      <UserNav/>
    </header>
    <div class="divider"></div>
    <section class="main">
      <Nuxt />
    </section>
    <div class="divider"></div>
    <footer>Powerred with &hearts; and caffeine..</footer>
  </section>
</template>
<script>
import UserNav from '~/components/UserNav.vue';

export default {
  name: 'DefaultLayout',
  components: {
    UserNav
  },
  data() {
    return {}
  },
  methods: {
  },
}
</script>