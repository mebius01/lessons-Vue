<template>
  <div id="app">
    <div>
      <input type="text" v-model="article.title">
      <br>
      <textarea v-model="article.body"></textarea>
      <br>
      <button @click="sendArticle">Send Article</button>
    </div>
    <div class="container">
      <div class="card" v-if="status">
         <h3>{{ newArticle.title }}</h3>
         <p>{{ newArticle.body }}</p>
      </div>
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
    newArticle: null,
    article: {
      title: null,
      body: null
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
    sendArticle: function() {
      axios.post(this.postArticles, this.article)
            .then((response) => {
              this.newArticle = response.data
              this.status = response.status
            })
    }
  }
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
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
    margin: 10px auto 10px;
  }
  textarea {
    @extend input;
    height: 60px;
  }
  button {
    @extend input;
    height: 30px;
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
