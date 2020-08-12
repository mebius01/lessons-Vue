<template>
  <div id="app">
    <input v-model="inputMsg" type="text" name="" id="">
    <p>{{ inputMsg }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    inputMsg: null
  })
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  a {
    display: inline-block;
    text-decoration: none;
    color: #162f49;
    border: 1px solid;
    padding: 5px;
  }
  a:hover {
    background-color: #162f49;
    color: whitesmoke;
  }

  li {
    list-style: none;
    color: #2c504e;
    text-decoration: dashed;
    font-size: 18px;
  }
}
</style>
