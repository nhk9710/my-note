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
            <p>도시  </p>
            <q-input standout="bg-black text-white" v-model="city"  />
          </div>
          <div class="flex justify-between input-item">
            <p>주소  </p>
            <q-input standout="bg-black text-white" v-model="address"/>
          </div>
          <div class="flex justify-between input-item">
            <p>나라  </p>
            <q-input standout="bg-black text-white" v-model="country" />
          </div>
          <div class="flex justify-between input-item">
            <p>우편번호  </p>
            <q-input standout="bg-black text-white" v-model="postalZip" />
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
          @click="!!index ? goUpdate() : goCreate()"
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
import listData from '../sample/countryData.json'


export default defineComponent({
  name: 'CountryCreate',
  data() {
    return {
      data: listData,
      city: null,
      address: null,
      country: null,
      index: null,
      postalZip: null
    }
  },
  created(){
    this.$data.index = this.$route.params.contentId

    this.$data.city = !!this.$data.index ? listData[this.$data.index]?.city || '' : ""
    this.$data.address = !!this.$data.index ? listData[this.$data.index]?.address || '' : ""
    this.$data.country = !!this.$data.index ? listData[this.$data.index]?.country || '' : ""
    this.$data.postalZip = !!this.$data.index ? listData[this.$data.index]?.postalZip || '' : ""


    console.log(this.$data.city)
  },
  methods: {
    goHome(){
      this.$router.push({
        path: '/'
      })
    },
    goList(){
      this.$router.push({
        path: '/country-list'
      })
    },
    goCreate(){
      console.log("고크리에이트")
        this.data.push({
          city: this.city,
          address: this.address,
          country: this.country,
          postalZip: this.postalZip,
          id: listData[listData.length-1].id+1
        })
      this.$router.push({
        path: '/country-list'
      })
    },
    goUpdate(){
      console.log("실행");

      listData[this.index].city= this.$data.city;
      listData[this.index].address= this.$data.address;
      listData[this.index].country= this.$data.country;
      listData[this.index].postalZip= this.$data.postalZip;

      this.$router.push({
        path: '/country-list'
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
