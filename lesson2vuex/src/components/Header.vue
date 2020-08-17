<template>
  <div class="header">
    <h2>Header</h2>
    <p v-for="(item, index) in allUsers" :key="index">
      <strong>{{item.nickname}}</strong>: <span>{{item.age }}</span>
    </p>
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters("users", ["allUsers"])
  },
  methods: {
    ...mapActions("users", ["addNewUser"]),
    addUser() {
      const newUser = {
        id: 2,
        nickname: "Div",
        age: 30
      }
    this.addNewUser(newUser)
    },
  }
}
</script>

<style lang="scss" scoped>
h2 {
  border: 1px solid;
  padding: 10px 0;
}
</style>