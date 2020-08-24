<template>
  <div id="app">
    <template>
      <div>
        <p v-if="STATUS_RESPONSE.error">{{STATUS_RESPONSE.error}}</p>
        <p v-else>{{STATUS_RESPONSE.status}}</p>
      </div>
    </template>
    <input type="text" placeholder="search..." v-model="search" @input="onChangeInput"/>
    <button @click="CHANGE_SHOW_LIST">Show List Country</button> <span>{{SHOW_LIST}}</span>
    <br>
    Search: {{SEARCH}}
    <br>
    <button @click="CHANGE_COUNTER_PLUS">+ 1</button>
    <Counter />
    <button @click="CHANGE_COUNTER_MINUS">- 1</button>
    <ul class="results-list">
        <li v-for="(item, index) in RESULTS" :key="index">
          <a>
              {{item.Country}}
          </a>
        </li>
      </ul>

  </div>
</template>

<script>
import Counter from './components/Counter'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "App",
  components: {
    Counter
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters("covid", ["ARR_COUNTRIES", // список городов
                            "STATUS_RESPONSE", // статус и ошибки ответов сервера
                            "SEARCH",
                            "RESULTS",
                            "SHOW_LIST"
    ]),
    
  },
  methods: {
    ...mapActions("covid", ["GET_SUMMARY",
                            "GET_SEARCH",
                            "GET_RESULTS",
                            "CHANGE_SHOW_LIST",
                            "CHANGE_COUNTER_PLUS",
                            "CHANGE_COUNTER_MINUS"
    ]),

    onChangeInput() {
      this.GET_RESULTS()
      this.GET_SEARCH(this.search)
    },

    filterResults() {
      this.GET_RESULTS()
      },
  },
  mounted() {
    this.GET_SUMMARY(),
    this.GET_RESULTS()
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
