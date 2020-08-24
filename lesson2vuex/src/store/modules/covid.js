import axios from "axios";
export default {
  namespaced: true,
  state: {
    rootUrl: "https://api.covid19api.com/summary",
    search: "",
    results: [],
    btnShowListCountries: false,
    arrDataCountries: null,
    objOneCountry: null,
    arrowCounter: 0,
    statusResponse: {
      error: null,
      status: null
    }
  },
  getters: {
    ARR_COUNTRIES(state) {
      return state.arrDataCountries;
    },
    STATUS_RESPONSE(state) {
      return state.statusResponse;
    },
    RESULTS(state) {
      return state.results
    },
    SEARCH(state) {
      return state.search
    },
    SHOW_LIST(state) {
      return state.btnShowListCountries
    },
    COUNTER(state) {
      return state.arrowCounter
    }
  },
  mutations: {
    CREATE_ARR_COUNTRIES: (state, list) => {
      state.arrDataCountries = list
    },
    CREATE_STATUS_RESPONSE: (state, status) => {
      state.statusResponse.status = status
    },
    CREATE_ERROR_RESPONSE: (state, error) => {
      state.statusResponse.error = error
    },
    CREATE_SEARCH: (state, payload) => {
      state.search = payload
    },
    CREATE_RESULTS: (state, payload) => {
      state.results = payload
    },
    CREATE_SHOW_LIST: (state, payload) => {
      state.btnShowListCountries = payload
    },
    CREATE_COUNTER: (state, payload) => {
      state.arrowCounter = payload
    }
  },
  actions: {
    GET_SUMMARY({ state, commit }) {
      axios.get(state.rootUrl)
      .then(response => {
        let resp = response
        commit("CREATE_ARR_COUNTRIES", resp.data.Countries)
        commit("CREATE_STATUS_RESPONSE", resp.status)
      })
      .catch(error => {
        commit("CREATE_ERROR_RESPONSE", error)
      })
    },

    GET_SEARCH({commit}, search) {
      commit("CREATE_SEARCH", search)
    },

    GET_RESULTS({commit, getters}) {
      let results = getters.ARR_COUNTRIES.filter(item => item.Country.toLowerCase().indexOf(getters.SEARCH.toLowerCase()) > -1)
      commit("CREATE_RESULTS", results)
    },

    CHANGE_SHOW_LIST({commit, getters}) {
      let showList = !getters.SHOW_LIST
      commit("CREATE_SHOW_LIST", showList)
    },
    CHANGE_COUNTER_PLUS({commit, getters}) {
      let c = getters.COUNTER+1
      commit("CREATE_COUNTER", c)
    },
    CHANGE_COUNTER_MINUS({commit, getters}) {
      let c = getters.COUNTER-1
      commit("CREATE_COUNTER", c)
    }
  }
}
  // state.arrDataCountries.filter(item => item.Country.toLowerCase().indexOf(state.search.toLowerCase()) > -1)