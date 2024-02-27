<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {onBeforeMount, ref} from "vue"

const dark = ref(localStorage.getItem('theme') === 'dark')
const darkChange = () => {
  if (dark.value) {
    document.documentElement.attributes['data-theme'].value = 'dark'
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.attributes['data-theme'].value = 'light'
    localStorage.setItem('theme', 'light')
  }
}
onBeforeMount(async () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.attributes['data-theme'].value = 'dark'
  } else {
    document.documentElement.attributes['data-theme'].value = 'light'
  }
})
</script>

<template>
  <div class="bg-white">
    <div class="fixed top-0 left-0 right-0 shadow-sm z-20 transition ease-in-out duration-300">
      <div class="navbar max-w-screen-lg mx-auto my-2 px-8 space-x-2">
        <div class="flex-1">
          <div class="flex items-center logo cursor-pointer">
            <i class="icon icon-apple text-3xl"></i>
            <span class="font-bold text-lg">
            daisyui
            </span>
          </div>
        </div>
        <div>
          <button class="btn btn-ghost">
            <i class="icon icon-search text-2xl"></i>
          </button>
        </div>
        <div class="hidden md:flex px-3">
          <div class="border-l border-base-300 h-6"></div>
        </div>
        <label class="swap swap-rotate text-2xl">
          <input type="checkbox" @change="darkChange" class="hidden" v-model="dark"/>
          <i class="icon icon-light swap-on"></i>
          <i class="icon icon-dark swap-off"></i>
        </label>
        <div class="hidden md:flex space-x-2">
          <button class="btn btn-ghost">注册</button>
          <button class="btn btn-active btn-outline">登录</button>
        </div>
      </div>
    </div>
  </div>
  <!--  <HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
.logo {
  /*height: 6em;*/
  /*padding: 1.5em;*/
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
