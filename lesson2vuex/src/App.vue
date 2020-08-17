<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <Header />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "App",
  data() {
    return {
      name: "Test Vuex"
    }
  },
  components: {
    Header
  }

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
