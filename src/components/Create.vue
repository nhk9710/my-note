<template>

</template>

<script>
import { defineComponent } from "vue";
import listData from '../sample/listData.json'

export default defineComponent({
  name: 'Create',
  data() {
    return {
      data: listData
    }
  }
})
</script>

<style scoped>

</style>
