<template>
  <div>
    <h2>{{ onObjFromList.task }}</h2>
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