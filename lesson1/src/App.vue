<template>
  <div id="app">
    <h1 :title="firstName">{{ firstName }}</h1>
    <p>{{ msg }}</p>
    <hr>
    <p v-if="status">Status True</p>
    <p v-else>Status False</p>
    <hr>
    <h3 v-if="num == 2">Num = 2</h3>
    <h3 v-else-if="num == 1">Nam = 1</h3>
    <h3 v-else>Num = ...</h3>
    <hr>
    <template v-if="status">
      <h1>Status True</h1>
      <p>
        <strong>Status True</strong>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
      </p>
    </template>
    <template v-else>
      <h1>Status False</h1>
      <p>
        <strong>Status False</strong>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
      </p>
    </template>
    <hr>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index }} - {{ item }}</li>
    </ul>
    <ul>
      <li v-for="(user, index) in users" :key="index">{{user.id}} - {{user.name}}</li>
    </ul>
    <hr>
    <a @click.prevent="fun1" href="#">Click Fun 1</a><span style="margin:20px; color: red" >{{ num }}</span>



  </div>
</template>

// {{ msg }} - свойсво
// v-bind:title or :title - Директива
// v-if v-else-if v-else - Условия
// template - обертка
// <div v-for="(item, index) in list" :key="index">{{ item }}</div> - Перебор массива
// <li v-for="(user, index) in users" :key="index">{{user.id}} - {{user.name}}</li> - Перебор объекта
// @click.prevent="fun1" - событие клик, хендлерс = fun1


<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    firstName: "Iv",
    msg: "Простой текст",
    status: false,
    num: 1,
    list: [1,2,3,4,5],
    users: [{id:1, name:"A"}, {id:2, name:"B"}, {id:3, name:"C"}]
  }),
  created: function () {
    console.log("index ok");
  },
  methods: {
    fun1: function() {
      this.num++
    }
  },
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
