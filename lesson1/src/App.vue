<template>
  <div id="app">
    <h1>
      {{ firstName }}
      {{ num + 12 }}
      <h3>{{ num > 10 ? `${num} меньше 10` : `${num} больша 10` }}</h3>
      <h3>{{ obj.age }}</h3>
      <a :href="linkUrl">Link</a>
    </h1>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {},
  data: () => ({
    firstName: "Iv",
    num: 12,
    obj : {
      age: 36,
      firstName: "Iv",
      lostName: "Krig"
    },
    linkUrl: 'http://google.com'
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
}
</style>
