<template>
  <div>
      <ul>
        <li v-for="(item, index) in datalist"
          :key="index">
          {{ item.task }}
          <button @click="$emit('remove-item', item.id)">X</button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['datalist'],
}
</script>

<style lang="scss" scoped>
  .flex-centr {
    display: flex;
    align-items: center;
  }
  button {
      cursor: pointer;
      margin-left: 24px;
      background: rgb(255, 201, 201);
      border: none;
    }
  label {
    @extend .flex-centr;
    font-size: 24px;
    margin: 10px 0;
    span {
      margin-left: 24px;
    }
    input {
      width: 24px;
      height: 24px;
      margin-right: 24px;
    }
    
  }
</style>