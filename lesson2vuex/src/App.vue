<template>
  <div id="app">
    <Autocomplete />
  </div>
</template>

<script>
import Autocomplete from './components/Autocomplete'
export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    Autocomplete
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
