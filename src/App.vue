<script setup>
import Header from "./views/Header.vue"
import Footer from "./views/Footer.vue"
import {getCurrentInstance, onBeforeMount} from "vue"

const {proxy} = getCurrentInstance()

const query = async () => {
  proxy.axios.get('/app/hots').then(res => {
    console.log(res.data)
  })
}
onBeforeMount(async () => {
  console.log('mounted')
  await query();
})
</script>

<template>
  <div>
    <Header/>
    <div id="viewBox" class="overflow-y-scroll h-screen">
      <div class="h-20"></div>
      <div class="max-w-screen-lg mx-auto">
        <router-view></router-view>
      </div>
      <div class="max-w-screen-lg mx-auto mt-0 lg:mt-24">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
