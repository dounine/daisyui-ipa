<script setup>
import Header from "./views/Header.vue"
import Footer from "./views/Footer.vue";
</script>

<template>
  <div>
    <Header/>
    <div id="viewBox" class="overflow-y-scroll h-screen grid" style="grid-template-rows: auto 1fr auto;">
      <div class="h-20"></div>
      <div class="max-w-screen-lg mx-auto px-4 lg:px-0">
        <router-view></router-view>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
</style>
