<template>
  <div class="main-container">
    <div class="main-content q-pa-lg">
      <h1 class="text-weight-bolder q-ma-none q-mt-xl">생생정보통</h1>


      <div class="btn-wrapper">
        <q-btn
          class="bg-red q-mt-md"
          size="40px"
          round
          @click="goList()"
        >
          <q-icon name="edit"></q-icon>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import listData from '../sample/listData.json'

export default defineComponent({
  name: 'Main',
  data() {
    return {
      listData: listData
    }
  },
  methods:{
    goList(){
      this.$router.push({
        path: 'List'
      })
    }
  }
})
</script>

<style scoped>
@import "../assets/Main.css";
</style>
