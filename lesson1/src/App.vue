<template>
  <div id="app">
    <div>
      <button @click="postUser">Post User</button>
    </div>
    <div class="container">
      <div class="card" v-for="(item, index) in posts" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data: () => ({
    posts: null,
    status: null,
    article: {
      title: "TTTT",
      body: "TTTT"
    },
    getArticles: "https://jsonplaceholder.typicode.com/posts",
    postArticles: "https://jsonplaceholder.typicode.com/posts"
  }),
  mounted() {
    axios.get(this.getArticles)
         .then(response => (this.posts = response.data))
         .catch(error => console.error(error));
    console.log(this.article.title);
  },
  methods: {
    postUser: () => {
      axios.post("https://jsonplaceholder.typicode.com/posts", {str: "title"})
            .then((response) => {
            console.log(response);
  })
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
