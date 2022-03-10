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
          <p class="text-weight-bolder size">도시</p>
          <p class="size2 text-weight-bolder">{{ data.city }}</p>
        </q-card-section>
        <q-separator/>
        <q-card-section class="flex justify-between">
          <p class="text-weight-bolder size">주소</p>
          <p class="size2 text-weight-bolder">{{ data.address }}</p>
        </q-card-section>
        <q-separator/>
        <q-card-section class="flex justify-between">
          <p class="text-weight-bolder size">나라</p>
          <p class="size2 text-weight-bolder">{{ data.country }}</p>
        </q-card-section>
        <q-card-section class="flex justify-between">
          <p class="text-weight-bolder size">우편번호</p>
          <p class="size2 text-weight-bolder">{{ data.postalZip }}</p>
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
          @click="goUpdate()"
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
import listData from '../sample/countryData.json'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'CountryDetail',
  setup(){
    const index = useRoute().params.contentId;
    const list = ref(listData);
    const data = ref(list.value.find(item => item.id === Number(index)));
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
    function goUpdate(){
      $router.push({
        name: 'CountryCreate',
        params:{
          contentId: this.index-1
        }
      })
    }
    function goList(){
      $router.push({
        path: '/country-list'
      })
    }
    return{
      data,
      filter,
      index,
      goHome,
      goCreate,
      goUpdate,
      goList
    }
  }
})
</script>

<style scoped>
.detail-content{ max-width: 50%; flex-direction: column; margin: 10% auto 0; }

.size{ font-size: 1.3em }
.size2{ font-size: 1.6em }

</style>
