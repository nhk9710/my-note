<template>

  <div class="main-container">
    <div class="home-container flex justify-end">
      <q-btn
        class="q-mt-xl q-mr-xl"
        size="25px"
        round
        @click="goHome()"
        style="background-color: #3F51B5"
      >
        <q-icon name="home" class="text-white"></q-icon>
      </q-btn>
    </div>
    <div class="table-title q-mb-xl">
      <h1 class="text-weight-bolder">생생게시판</h1>
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
            <q-th auto-width />
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
            <q-td auto-width>
              <q-btn color="red-7" @click.stop.prevent="goRemove(props.row)"><q-icon name="delete"></q-icon> </q-btn>
            </q-td>
            <q-td
              class="cursor-pointer"
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
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
  </div>

</template>

<script>
import { defineComponent, ref } from "vue"
import listData from '../sample/listData.json'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const columns = [
  { name:'name', label: '이름', align: 'left', field: row => row.name },
  { name:'email', label: '이메일', align: 'left', field: 'email' },
  { name:'company', label: '회사', align: 'left', field: 'company' },
];

const pagingMixin = defineComponent({
  methods: {
    paging() {

    }
  }
})

export default defineComponent({
  name: 'List',
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
          path: '/List'
        })
      })
    }

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
    function goDetail(props){
      $router.push({
        name: 'Detail',
        params:{
          contentId: props.name.replaceAll(' ', '+')
        }
      })
    }

    return{
      columns,
      rows,
      filter,
      goRemove,
      goHome,
      goCreate,
      goDetail
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
