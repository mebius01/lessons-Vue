<template>
  <div>
      <label :form="onObjFromList.id">
        <input type="checkbox" :name="onObjFromList.id" :id="onObjFromList.id">
        <span>{{ onObjFromList.task }}</span>
        <button @click="$emit('remove-item', onObjFromList.id)"></button>
      </label>
  </div>
</template>

<script>
export default {
  props: {
    onObjFromList: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .flex-centr {
    display: flex;
    align-items: center;
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
    button {
      @extend input;
      cursor: pointer;
      margin-left: 24px;
      background: rgb(255, 201, 201);
      border: none;
    }
  }
</style>