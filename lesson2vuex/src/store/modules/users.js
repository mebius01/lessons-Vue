export default {
  namespaced: true,
  state: {
    listUser: [
      {
        id: 1,
        nickname: "Iv",
        age: 36
      }
    ]
  },
  getters: {
    allUsers(state) {
      return state.listUser;
    }
  },
  mutations: {},
  actions: {
    addNewUser(context, user) {
      console.log(context);
      console.log(user);
    }
  },
}
