<template>

  <div class="main-container">
    <video muted autoplay loop src="../video/Waterfall.mp4"></video>
    <div class="country-header flex justify-between">
      <div class="col-3" style="width: 20%;"><img src="../img/TheEarth.png" alt="지구본" @click="goCountry()"></div>
      <div class="country-notices flex justify-between col-6" style="width: 45%">
        <div class="header-nav"><p @click="goCList()">Country</p></div>
        <div class="header-nav"><p>Nature</p></div>
        <div class="header-nav"><p>Travel</p></div>
        <div class="header-nav"><p @click="goWorld()">World</p></div>
      </div>
      <div class="col-3 flex" style="width:33%; justify-content: end"><q-icon class="cursor-pointer" name="menu" size="xl"></q-icon></div>
    </div>

    <div class="table-container">
      <q-table
        class="my-sticky-virtscroll-table"
        style="height: 400px"
        :rows="rows"
        :columns="columns"
        :filter="filter"
        row-key="name"
      >
        <template #top-right>
          <q-input dense v-model="filter" placeholder="검색">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:header="props">
          <q-tr :props="props">

            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" @click="goDetail(props.row)">
            <q-td
              class="cursor-pointer"
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
            <q-td auto-width>
              <q-btn color="red-7" @click.stop.prevent="goRemove(props.row)"><q-icon name="delete"></q-icon> </q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <div class="full-width q-mt-sm">
        <q-btn
          @click="goCreate()"
          class="float-right"
          style="background-color: #3F51B5; color: white"
        >작성
        </q-btn>
      </div>
    </div>

    <div class="country-footer">
      <div class="footer-contents flex justify-between">
        <div class="footer-content" style="align-items: start">
          <p class="text-weight-bolder">More Info</p>
          <b>CopyRight2022 The Country.com</b>
        </div>
        <div class="footer-content">
          <p class="text-weight-bolder">Find Nature</p>
          <b>On the Mountain</b>
          <b>Under the Sea</b>
          <b>In the Lake</b>
          <b>Fly to Sky</b>
        </div>
        <div class="footer-content">
          <p class="text-weight-bolder">Join Us</p>
          <img src="../img/facebook.png" style="width: 37px" alt="페이스북">
          <img src="../img/insta.png" alt="인스타그램">
          <img src="../img/twit.png" alt="트위터">
          <img src="../img/github.png" alt="깃허브">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent, ref } from "vue"
import listData from '../sample/countryData.json'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const columns = [
  { name:'city', label: '도시', align: 'left', field: row => row.city },
  { name:'address', label: '주소', align: 'left', field: 'address' },
  { name:'country', label: '나라', align: 'left', field: 'country' },
];

const pagingMixin = defineComponent({
  methods: {
    paging() {

    }
  }
})

export default defineComponent({
  name: 'CountryList',
  mixins: [pagingMixin],
  setup() {
    const $q = useQuasar();
    const rows = ref(listData);
    const filter = ref('');
    const $router = useRouter();

    function goRemove (row) {
      $q.dialog({
        title: '삭제',
        message: '정말 삭제하시겠습니까?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        rows.value.splice(rows.value.indexOf(row), 1)
        $router.push({
          path: '/country-list'
        })
      })
    }

    function goCList(){
      $router.push({
        path: '/country-list'
      })
    }
    function goCreate(){
      $router.push({
        path: '/save/country-create'
      })
    }
    function goDetail(props){
      $router.push({
        name: 'CountryDetail',
        params:{
          contentId: props.id
        }
      })
    }
    function goCountry(){
      $router.push({
        path: '/country-main'
      })
    }
    function goWorld(){
      $router.push({
        path: '/world'
      })
    }

    return{
      columns,
      rows,
      filter,
      goRemove,
      goCreate,
      goDetail,
      goCountry,
      goCList,
      goWorld
    }
  }
})

</script>

<style lang="sass">
.table-container
   margin-top: 50%

.home-container
  q-btn
    color: #FFFFFF

.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
