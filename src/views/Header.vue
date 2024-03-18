<script setup>
import {onBeforeMount, onMounted, ref} from "vue"
const dark_name = 'dark'
const light_name = 'light'
const dark = ref(localStorage.getItem('theme') === dark_name)

const darkChange = () => {
  let el = document.documentElement.attributes['data-theme'];
  el.value = dark.value ? dark_name : light_name
  localStorage.setItem('theme', dark.value ? dark_name : light_name)
}
onBeforeMount(async () => {
  let el = document.documentElement.attributes['data-theme'];
  if (!el) return;
  if (localStorage.getItem('theme') === dark_name) {
    el.value = dark_name
  } else {
    el.value = light_name
  }
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 shadow-sm z-10 transition ease-in-out duration-300 backdrop-blur-sm">
    <div class="navbar max-w-screen-xl mx-auto my-1 px-4 space-x-2">
      <div class="flex-1">
        <RouterLink to="index" class="text-inherit hover:text-inherit">
          <div class="flex items-center logo cursor-pointer">
            <i class="icon icon-apple text-3xl"></i>
            <span class="font-bold text-lg">
            daisyui
            </span>
          </div>
        </RouterLink>
      </div>
      <div class="hidden sm:flex">
        <!--        <button class="btn btn-ghost">-->
        <!--          热门应用-->
        <!--        </button>-->
        <button class="btn btn-ghost normal-case">
          AppStore 应用提取
        </button>
      </div>
      <div>
        <RouterLink to="search" class="text-inherit hover:text-inherit">
          <div class="hover:text-inherit btn btn-ghost">
            <i class="icon icon-search text-xl"></i>
          </div>
        </RouterLink>
      </div>
      <div class="hidden lg:flex px-3">
        <div class="border-l border-base-300 h-6"></div>
      </div>
      <label class="swap swap-rotate text-2xl">
        <input type="checkbox" @change="darkChange" class="hidden" v-model="dark"/>
        <i class="icon icon-light swap-on"></i>
        <i class="icon icon-dark swap-off"></i>
      </label>
      <div class="hidden lg:flex space-x-2">
        <RouterLink to="login" class="text-inherit hover:text-inherit">
          <button class="btn btn-ghost">注册</button>
        </RouterLink>
        <RouterLink to="login" class="text-inherit hover:text-inherit">
          <button class="btn btn-outline text-spa">登录</button>
        </RouterLink>
      </div>
      <div class="lg:hidden">
        <div class="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" class="drawer-toggle"/>
          <div class="drawer-content">
            <label for="my-drawer-4" class="drawer-button btn btn-ghost">
              <i class="icon icon-bars text-xl"></i>
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-100 shadow-xl text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#my-drawer-4:checked ~ .drawer-side > label.drawer-box {
  @apply flex;
}

.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  @apply bg-black bg-opacity-20;
}

.logo {
  /*height: 6em;*/
  /*padding: 1.5em;*/
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
