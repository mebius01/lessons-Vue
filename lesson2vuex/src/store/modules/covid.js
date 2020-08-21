import axios from "axios"
export default {
  namespaced: true,
  state: {
    rootUrl: "https://api.covid19api.com/summary",
    search: null,
    results: [],
    btnShowListCountries: false,
    arrDataCountries: null,
    objOneCountry: null,
    arrowCounter: -1,
  },
  getters: {},
  mutations: {
    SET_COUNTRIES: (state, data) => {
      state.arrDataCountries = data
    }
  },
  actions: {
    GET_SUMMARY({ commit }) {
      return axios.get("https://api.covid19api.com/summary")
        .then(response => {
          commit("SET_COUNTRIES", response)
        })
    }
  }
}
