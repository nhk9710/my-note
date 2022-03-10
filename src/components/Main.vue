<template>
  <div class="main-container">
    <div class="main-content q-pa-lg">
      <h1 class="text-weight-bolder q-ma-none q-mt-xl glitch" data-glitch="Notice" style="margin-top: 10%">Notice</h1>

<!-- 게시판1 -->
      <div class="btn-wrapper">
        <q-btn
          class="bg-red q-mt-md"
          size="20px"
          round
          @click="goList()"
        >
          프로토 게시판
        </q-btn>


<!-- 게시판2  -->
        <q-btn
          class="bg-red q-mt-md q-ml-xl"
          size="20px"
          round
          @click="goCountry()"
        >
          The country
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
    },
    goCountry(){
      this.$router.push({
        path: '/country-main'
      })
    }
  }
})
</script>

<style scoped lang="scss">
@import "../assets/Main.css";


.glitch {
  font-size:60px; line-height:1;
  font-family:'Poppins', sans-serif; font-weight:700;
  text-transform:uppercase; letter-spacing:0.5em;
  margin:0;
  text-decoration:none;
  color:#fff;
  position:absolute; top:5%; left:50%;
  transform:translate(-50%, -50%);
  &:before, &:after {
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .5;
  } &:after {
      color: #f0f;
      z-index: -2;
    } &:before {
        color: #0ff;
        z-index: -1;
      }
  /* IF USING FOR HOVER ONLY REMOVE CODE BELOW */
  &:hover:after {
    animation: glitch .35s cubic-bezier(.25, .46, .45, .94) both infinite;
  } &:hover:before {
      animation: glitch .35s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
    }
  /* IF USING FOR HOVER ONLY USE CODE BELOW
  &:hover {
      &:before {
          animation: glitch .25s cubic-bezier(.25, .46, .45, .94) both infinite
      }
      &:after {
          animation: glitch .25s cubic-bezier(.25, .46, .45, .94) reverse both infinite
      }
  }
  */
}

@keyframes glitch {
  0% {
    transform: translate(-5px, 5px)
  }
  30% {
    transform: translate(-5px, -5px)
  }
  55% {
    transform: translate(5px, 5px)
  }
  80% {
    transform: translate(5px, -5px)
  }
}

</style>
