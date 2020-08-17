<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home Component</router-link></li>
        <li><router-link to="/i">Component I</router-link></li>
        <li><router-link to="/ii">Component II</router-link></li>
      </ul>
    </nav>
    <h2>{{str | uppercase}}</h2>
    <img src="./img/logo.png" alt="">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    completed: false,
    str: "String"
  }),
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1, h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(10, 36, 36);
}

  p {
    width: 80%;
    margin: 30px auto;
}

  ul {
    @extend p;
    @extend h1;
    list-style: none;

    li {
      margin: 0 12px;

      a {
        text-decoration:  none;
        display: block;
        color: rgb(0, 92, 128);
        border: 1px solid;
        padding: 5px;
      }
    }
  
}

img {
  @extend h1;
  @extend p;
  width: 100px;
  height: auto;
}
</style>
