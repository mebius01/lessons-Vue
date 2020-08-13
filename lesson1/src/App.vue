<template>
  <div id="app">
    <h1>Test Componets</h1>
    <hr>
    <CompTest v-bind:datalist="dataList"/>
  </div>
</template>

<script>
import CompTest from './components/CompTest'
export default {
  name: "App",
  components: {
    CompTest,
  },
  data: () => ({
    dataList: [
      {id:1, task:"task 1", completed: false},
      {id:2, task:"task 2", completed: false},
      {id:3, task:"task 3", completed: false},
      {id:4, task:"task 4", completed: true},
    ] 
  }),
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  input {
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 50%;
    border: none;
    box-shadow: inset 0px 0px 5px -1px rgba(0,0,0,0.75);
    margin: 10px auto 10px;
  }
  textarea {
    @extend input;
    height: 60px;
  }
  button {
    @extend input;
    height: 30px;
    background-color: rgba(0, 88, 43, 0.5);
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
  }
  .container {
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;

    .card {
      padding: 10px;
      box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);

      h3 {
        color: rgb(0, 88, 43);
        text-transform: uppercase;
      }
    }
  }
}
</style>
