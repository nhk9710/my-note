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
    <div class="detail-content flex">

      <q-card>
        <q-card-section class="flex justify-between">
          <p class="text-weight-bolder size">이름</p>
          <p class="size2 text-weight-bolder">{{ data.name }}</p>
        </q-card-section>
        <q-separator/>
        <q-card-section class="flex justify-between">
          <p class="text-weight-bolder size">이메일</p>
          <p class="size2 text-weight-bolder">{{ data.email }}</p>
        </q-card-section>
        <q-separator/>
        <q-card-section class="flex justify-between">
          <p class="text-weight-bolder size">회사</p>
          <p class="size2 text-weight-bolder">{{ data.company }}</p>
        </q-card-section>
      </q-card>

      <div class="full-width q-mt-sm">
        <q-btn
          @click="goList()"
          class="float-right q-ml-lg"
          style="background-color: #3F51B5; color: white"
        >목록
        </q-btn>
        <q-btn
          @click="goUpdate(data)"
          class="float-right"
          style="background-color: #3F51B5; color: white"
        >수정
        </q-btn>
      </div>

    </div>
  </div>


</template>

<script>
import { defineComponent, ref } from "vue";
import listData from '../sample/listData.json'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Detail',
  setup(){
    const rows = ref(listData);
    const filter = ref('');
    const $router = useRouter();


    function goHome(){
      $router.push({
        path: '/'
      })
    }
    function goCreate(){
      $router.push({
        path: '/save/create'
      })
    }
    function goUpdate(data){
      $router.push({
        name: 'Create',
        params:{
          contentId: data.name.replaceAll(' ', '+')
        }
      })
    }
    function goList(){
      $router.push({
        path: '/List'
      })
    }
    return{
      rows,
      filter,
      goHome,
      goCreate,
      goUpdate,
      goList
    }
  },
  data() {
    const index = this.$route.params.contentId.replaceAll('+', ' ')

    return {
      data: listData.find(item => item.name === index),
      index: index
    }
  }
})
</script>

<style scoped>
.detail-content{ max-width: 50%; margin: 0 auto; flex-direction: column; margin-top: 10%; }

.size{ font-size: 1.3em }
.size2{ font-size: 1.6em }

</style>
