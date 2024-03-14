<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import Common from "../util/common.js";

const {proxy} = getCurrentInstance()
const loading = ref(false)
const data = ref({
  info: {},
  versions: []
})
const query = async () => {
  let res = null
  try {
    loading.value = true
    res = await proxy.axios.get(`/app/versions`)
  } catch (e) {
    // loadTimeout.value = e.message.includes('timeout')
    return
  } finally {
    loading.value = false
  }
  data.value = res.data.data
}
onMounted(async () => {
  await query()
})
</script>

<template>
  <div class="mt-10">
    <div class="hidden sm:flex flex-col bg-base-100 sm:bg-base-200 px-4 py-4 rounded-lg">
      <div class="flex flex-col-reverse sm:flex-row">
        <div class="flex-1 flex flex-row justify-center items-center">
          <div class="flex flex-col space-y-6 max-w-screen-sm md:mt-4">
            <h1 class="flex text-3xl font-bold max-w-80">{{ data.info.name }}</h1>
            <p class="flex">{{ data.info.description }}</p>
            <div class="flex flex-row space-x-4">
              <div v-for="item in [
                {name:'分类',value:'genres',icon:'icon-type'},
                {name:'价格',value:'price',icon:'icon-price'},
                {name:'地区',value:'country',icon:'icon-country'},
                {name:'版本',value:'version',icon:'icon-version2'}
                ]"
                   class="border rounded-lg border-base-content py-6 px-2 md:px-6 flex flex-col items-center">
                <i :class="'icon text-3xl '+item.icon || 'icon-type'"></i>
                <p class="text-sm mt-3">{{ item.name }}</p>
                <p class="font-bold">{{ data.info[item.value] }}</p>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                  class="btn hover:text-info hover:bg-inherit hover:border-info text-primary btn-outline kbd px-4 transition-all duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">
                Download 下载
                <i class="icon icon-download text-lg"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-1 justify-center items-center relative">
          <div class="loading-box">
            <span class="loading loading-spinner loading-sm text-primary"></span>
          </div>
          <img :src="data.info.icon" class="max-w-60 max-h-60 rounded-2xl shadow-md z-0" :alt="data.info.name"/>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:hidden px-4 relative">
      <div class="w-full h-full">
        <img :src="data.info.icon" class="w-full h-full rounded-t-2xl" :alt="data.info.name"/>
        <div class="flex flex-row shadow-xl rounded-b-2xl">
          <div class="flex flex-row flex-1 items-center">
            <div>
              <img :src="data.info.icon" class="w-10 h-10 rounded-lg m-4" :alt="data.info.name"/>
            </div>
            <div class="flex flex-col">
              <p class="font-bold text-xl">{{ data.info.name }}</p>
              <p class="text-base-content/80 text-lg">{{ data.info.version }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <button class="btn btn-ghost">
              <i class="icon icon-download text-2xl text-primary"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 mt-10">
      <div class="font-medium items-center flex space-x-2">
        <i class="icon icon-version"></i>
        <p>历史版本</p>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4 mt-4">
      <span v-if="loading" class="loading loading-spinner mx-auto"></span>
      <div v-else v-for="version in data.versions" class="transition-all duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">
        <div class="dark-bg transition-all flex flex-row bg-base-100 opacity-95 shadow sm:hover:shadow-indigo-500/50 rounded-md px-4">
          <div class="flex flex-row flex-1 my-4">
            <div class="flex-col flex-1 justify-around ml-2">
              <div class="flex items-center w-full lg:w-44 md:max-w-60">
                <strong class="md:truncate">{{ version.version }}</strong>
              </div>
              <div class="flex items-center text-sm size">
                <p class="text-accent">{{ Common.sizeFormat(version.size) }}</p>
              </div>
              <div class="flex items-center space-x-1 text-accent text-sm font-mono">
                <p>{{ version.time }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-end mb-3.5">
            <i class="icon icon-download text-xl cursor-pointer hover:text-info text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
