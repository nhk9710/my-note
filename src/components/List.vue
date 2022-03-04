<template>

  <div class="main-container">
    <div class="home-container flex justify-end">
      <q-btn
        class="bg-red-6 q-mt-xl q-mr-xl"
        size="40px"
        round
        @click="goHome()"
      >
        <q-icon name="home" class="text-white"></q-icon>
      </q-btn>
    </div>
    <div class="table-title q-mb-xl">
      <h1 class="text-weight-bolder text-white">생생게시판</h1>
    </div>
    <div class="table-container">
      <q-table
        class="my-sticky-virtscroll-table"
        style="height: 400px"
        :rows="rows"
        :columns="columns"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input dense v-model="filter" placeholder="검색">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import listData from '../sample/listData.json'

const columns = [
  { name:'name', label: '이름', align: 'left', field: row => row.name },
  { name:'email', label: '이메일', align: 'left', field: 'email' },
  { name:'company', label: '회사', align: 'left', field: 'company' },
]

const rows = listData

export default defineComponent({
  name: 'List',
  setup() {
    return{
      columns,
      rows
    }
  },
  data() {
    return {
      data: listData,
      columns,
      rows,
      filter: ''
    }
  },
  methods: {
    goHome(){
      this.$router.push({
        path: '/'
      })
    }
  }
})

</script>

<style lang="sass">
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
