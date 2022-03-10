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
            <q-input standout="bg-black text-white" v-model="name" label="이름"  />
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
import { defineComponent, ref } from "vue";
import listData from '../sample/listData.json'


export default defineComponent({
  name: 'Create',
  data() {
    const index = this.$route.params.contentId.replaceAll('+', ' ')
    return {
      data: listData.find(item => item.name === index),
      name: null,
      email: null,
      company: null,
      index: index
    }
  },
  created(){
    if (!!this.$data.data){
      const temp = JSON.parse(JSON.stringify(this.$data.data))
      this.$data.name = temp.name
      this.$data.email = temp.email
      this.$data.company = temp.company
    }
  },
  methods: {
    goHome(){
      this.$router.push({
        path: '/'
      })
    },
    goList(){
      this.$router.push({
        path: '/List'
      })
    },
    goUpload(){
      if(!!this.data){
        this.listData[this.listData.indexOf(this.listData.find(item => item.$data === this.$data))]={
          email: this.$data.email,
          name: this.$data.name,
          company: this.$data.company
        }
      }else
        this.data.push({
          name: this.name,
          email: this.email,
          company: this.company
        })
      this.$router.push({
        path: '/List'
      })
    }
  }
})
</script>

<style scoped>
.input-table{ background-color: white; border: 1px solid black; display: flex; flex-direction: column; justify-content: space-around;
              border-radius: 10px; }
.input-line{ max-width: 70%; margin: auto }
.input-item{ align-items: center; margin-bottom: 30px }
.input-item p{ margin: 0; font-weight: bolder }
.create-content{ max-width: 30%; margin: 0 auto; }
</style>
