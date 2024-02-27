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
      <div class="navbar max-w-screen-lg mx-auto">
        <div class="flex-1">
          <a href="/" class="flex items-center ml-2 font-bold">
            <i class="icon icon-apple"></i>
            daisyui
          </a>
        </div>
        <div class="flex-none">
          <label class="swap swap-rotate mr-2">
            <input type="checkbox" @change="darkChange" class="hidden" v-model="dark"/>
            <i class="icon icon-light swap-on text-2xl"></i>
            <i class="icon icon-dark swap-off text-2xl"></i>
          </label>
        </div>
      </div>
    </div>
  </div>
  <!--  <HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
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
