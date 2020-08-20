import Vue from "vue";
import Vuex from "vuex";
import users from './modules/users';
import covid from './modules/covid'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    covid
  }
});
