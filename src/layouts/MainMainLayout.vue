<template>
  <div class="column" style="height: 130vh; width: 100%; overflow: hidden">
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

    <div class="col">
      <router-view />
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
import { useRouter } from 'vue-router'

export default {
  name: "MainMainLayout.vue",
  setup() {
    const $router = useRouter();

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

    return {
      goCList,
      goCountry,
      goWorld
    }
  }

}
</script>

<style scoped>

</style>
