<template>
  <div id="app">

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "App",
  data() {
    return {}
  },
  mounted() {
    ...mapActions({
      "GET_SUMMARY"
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  h1 {
  text-align: center;
}
}
</style>
