<template>
  <div class="page">
    <div v-if="loggedIn" class="profile">
      <div class="avatar">
        <img src="https://api.dicebear.com/5.x/pixel-art/svg" alt="avatar" />
      </div>
      <div class="info">
        <h3>Profile</h3>
        <p>
          <label>Name</label><span>{{ user?.name }}</span>
        </p>
        <p>
          <label>Email</label><span>{{ user?.email }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfilePage',
  components: {},
  middleware: ['auth'],
  computed: {
    ...mapState('auth', {
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
    }),
  },
  created() {},
  methods: {},
}
</script>
<style lang="sass" scoped>
.profile
  display: flex
  justify-content: space-between
  gap: 30px
.avatar
  align-self: flex-start
  width: 64px
  max-width: 64px
  padding: 5px
  border-radius: 5px
  border: 1px solid #ddd
  img
    display: block
    width: 100%
.info
  flex: 1
  display: flex
  gap: 5px
  justify-content: space-between
  flex-direction: column
  align-self: center
  h3
    margin: 0 0 5px 0
    display: inline-block
    border-bottom: 1px dashed #ddd
    text-transform: uppercase
  p
    margin: 0
label
  display: inline-block
  min-width: 50px
</style>
