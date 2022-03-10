<template>

  <div class="all-container">
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
    <q-separator/>

    <div class="q-px-sm q-py-lg absol-btn">
      <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
        <q-fab v-ripple :class="classes" icon="keyboard_arrow_up" direction="up">
          <q-fab-action color="primary" icon="mail" />
          <q-fab-action color="red" icon="call" />
        </q-fab>
        </div>
    </div>


    <div class="country-body">
      <div class="body-contents">
        <div class="col-4">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6 q-mb-xs">Our Changing Planet</div>
              <div class="row no-wrap items-center">
                <q-rating size="18px" :max="5" color="primary" />
                <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
              </div>
            </q-card-section>

            <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="자연사진">
          </q-card>
        </div>
        <div class="col-4">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6 q-mb-xs">Our Changing Planet</div>
              <div class="row no-wrap items-center">
                <q-rating size="18px"  :max="5" color="primary" />
                <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
              </div>
            </q-card-section>

            <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="자연사진">
          </q-card>
        </div>
        <div class="col-4">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6 q-mb-xs">Our Changing Planet</div>
              <div class="row no-wrap items-center">
                <q-rating size="18px"  :max="5" color="primary" />
                <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
              </div>
            </q-card-section>

            <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="자연사진">
          </q-card>
        </div>
        <div class="col-4">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6 q-mb-xs">Our Changing Planet</div>
              <div class="row no-wrap items-center">
                <q-rating size="18px"  :max="5" color="primary" />
                <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
              </div>
            </q-card-section>

            <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="자연사진">
          </q-card>
        </div>
      </div>

      <div class="second-contents">
        <p>World Travel!</p>
        <q-carousel
          swipeable
          animated
          v-model="slide"
          :autoplay="autoplay"
          ref="carousel"
          infinite
          style="background: none; height: 355px; border: 1px solid teal; border-radius: 5px"
        >
          <q-carousel-slide :name="1" ><video autoplay muted style="width: 100%;" src="../video/nature1.mp4"></video></q-carousel-slide>
          <q-carousel-slide :name="2" ><video autoplay muted style="width: 100%;" src="../video/nature2.mp4"></video></q-carousel-slide>
          <q-carousel-slide :name="3" ><video autoplay muted style="width: 100%;" src="../video/nature3.mp4"></video></q-carousel-slide>
          <q-carousel-slide :name="4" ><video autoplay muted style="width: 100%;" src="../video/nature4.mp4"></video></q-carousel-slide>

          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18,18]"
              class="text-white rounded-borders"
              style="background:rgba(0,0,0,.3); padding: 4px 8px;"
            >
              <q-toggle dense dark color="white" v-model="autoplay" />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>

      <div class="third-content">
        <div class="q-mt-xl q-gutter-md">
          <div class="row justify-between">

            <q-parallax
              src="../img/Tuscany.jpg"
            >
              <div class="counter"><h1 class="text-white">1,132,465 view</h1></div>
            </q-parallax>

          </div>
        </div>
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
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from "vue"
import listData from '../sample/listData.json'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import counterUp from 'counterup2'




const columns = [
  { name:'name', label: '이름', align: 'left', field: row => row.name },
  { name:'email', label: '이메일', align: 'left', field: 'email' },
  { name:'company', label: '회사', align: 'left', field: 'company' },
];

const colors =[
  'primary', 'amber', 'secondary', 'orange', 'accent',
  'lime', 'cyan', 'purple', 'brown', 'blue'
]

export default defineComponent({
  name: 'CountryList',

  setup() {
    const $q = useQuasar();
    const rows = ref(listData);
    const filter = ref('');
    const $router = useRouter();
    const color = ref(colors[0])
    const index = ref(0)

    let timer

    function goCList(){
      $router.push({
        path: '/country-list'
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


    onMounted(() => {
      const el = document.querySelector( '.counter' )
      counterUp( el, {
        duration: 2000,
        delay: 16,
      } )
      timer = setInterval(() => {
        index.value = (index.value + 1) % colors.length
        color.value = colors[ index.value ]
      }, 3000)
    })

    onBeforeUnmount(() => {
      clearTimeout(timer)
    })


    return{
      columns,
      rows,
      filter,
      index,
      classes: computed(() => `bg-${color.value}`),
      goCList,
      goCountry,
      goWorld,
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})

</script>

<style>
* {
  transition: background 1.5s;
}
.all-container{ width: 100%; height: 100%; background-color: whitesmoke; position: relative }
.country-header{ width: 100%;  margin: 0 auto; position: sticky; z-index: 2; top: 0; background-color: white; align-items: center; box-shadow: 2px 2px 20px black; }
.country-header img{ width: 180px; height: 100px; cursor: pointer }

.header-nav p{ font-size: 2em; font-weight: bolder; cursor:pointer }
.header-nav p:hover{ color: teal }

.country-body{ width: 100%; margin-top: 4%; }
.body-contents{ width: 100%; max-width: 1440px; margin: 0 auto; display: flex; justify-content: space-between; }
.my-card{ max-width: 350px; transition: all .2s linear }

.my-card:hover{ transform: scale(110%); }

.second-contents{ width: 100%; max-width: 1440px; margin: 4% auto 0; text-align: center }
.second-contents p{ font-size: 3em; font-weight: bolder }

.q-carousel__slide{ padding: 0; overflow: hidden }

.third-content{ width: 100%; }

.country-footer{ width: 100%; background-color: black }
.footer-contents{ width: 100%; max-width: 1440px; margin: 0 auto; color: white; padding-top: 3%; padding-bottom: 3% }
.footer-contents p{ font-size: 2em }
.footer-content img{ width: 50px; cursor: pointer; margin-top: 10%; }
.footer-content img:last-child{ width: 65px; cursor: pointer; margin-top: 10%; }
.footer-content{ display: flex; flex-direction: column; align-items: center }
.footer-content b{ margin-top: 5%; cursor:pointer }

.absol-btn{ position: fixed; left: 92%; top: 70%; z-index: 2 }


</style>
