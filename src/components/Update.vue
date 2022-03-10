<template>

  <div class="main-container">
    <div class="home-container flex justify-end">
      <q-btn
        class="q-mt-xl q-mr-xl"
        size="25px"
        round
        style="background-color: #3F51B5"
        @click="goHome()"
      >
        <q-icon name="home" class="text-white"></q-icon>
      </q-btn>
    </div>

    <div class="create-content">
      <div class="input-table">
        <div class="input-line">
          <div class="flex justify-between input-item q-mt-xl">
            <p>이름  </p>
            <q-input standout="bg-black text-white" v-model="name" label="이름" />
          </div>
          <div class="flex justify-between input-item">
            <p>이메일  </p>
            <q-input standout="bg-black text-white" v-model="email" label="이메일" />
          </div>
          <div class="flex justify-between input-item">
            <p>회사  </p>
            <q-input standout="bg-black text-white" v-model="company" label="회사" />
          </div>
        </div>

      </div>

      <div class="full-width q-mt-sm">
        <q-btn
          @click="goList()"
          class="float-right q-ml-lg"
          style="background-color: #3F51B5; color: white"
        >취소
        </q-btn>
        <q-btn
          @click="goUpload()"
          class="float-right"
          style="background-color: #3F51B5; color: white"
        >등록
        </q-btn>
      </div>
    </div>

  </div>

</template>

<script>
import { defineComponent } from "vue";
import listData from '../sample/listData.json'

export default defineComponent({
  name: 'Update',
  data() {
    return {
      data: listData
    }
  }
})
</script>

<style scoped>

</style>
