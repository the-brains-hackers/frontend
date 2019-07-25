import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: ""
  },
  mutations: {
    SET_USER({ state }, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit }, userInfo) {
      axios.post("", userInfo).then(data => {
        commit("SET_USER", data.user);
      });
    }
  }
});
