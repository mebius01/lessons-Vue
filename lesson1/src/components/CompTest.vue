<template>
  <div>
    <CompItem v-for="(item, index) in datalist" :key="index" :onObjFromList="item" />
  </div>
</template>

<script>
import CompItem from './CompItem'
export default {
  components: {
    CompItem
  },
  props: ['datalist']
}
</script>