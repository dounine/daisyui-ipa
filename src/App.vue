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
    <div id="viewBox" class="overflow-y-scroll min-h-svh relative">
      <div class="h-20"></div>
      <div class="max-w-screen-xl mx-auto flex-1 pb-28">
        <router-view></router-view>
      </div>
      <div class="max-w-screen-xl mx-auto mt-0 xl:mt-24 absolute bottom-0 left-0 right-0">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
