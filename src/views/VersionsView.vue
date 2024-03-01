<script setup>
import HotsView from "./HotsView.vue";
import NewsView from "./NewsView.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import Common from "../util/common.js";

const {proxy} = getCurrentInstance()
const loading = ref(false)
const info = ref({
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
  info.value = res.data.data
}
onMounted(async()=>{
  await query()
})
</script>

<template>
  <div class="mx-4 mt-10 space-y-10">
    <div class="flex flex-wrap">
      <span v-if="loading" class="loading loading-spinner mx-auto"></span>
      <div v-else v-for="version in info.versions"
           class="w-full mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300 hover:-translate-y-px hover:translate-x-px">
        <div class="flex flex-row bg-base-100 opacity-95 shadow rounded-md">
          <div class="flex flex-row flex-1 my-4 ml-4">
<!--            <div class="flex flex-1 items-center min-w-14 max-w-14">-->
<!--              <img class="w-14 h-14 rounded-md"-->
<!--                   :src="app.icon"-->
<!--                   :title="app.name"-->
<!--                   :alt="app.name"/>-->
<!--            </div>-->
            <div class="flex-col justify-around ml-2">
              <div class="flex items-center w-full lg:w-48 md:max-w-60">
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
            <i class="icon icon-download text-xl cursor-pointer hover:text-info mr-2"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
