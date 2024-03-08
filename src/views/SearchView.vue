<script setup>
import HotsView from "./HotsView.vue";
import NewsView from "./NewsView.vue";
import {getCurrentInstance, ref} from "vue";
import Common from "../util/common.js";

const {proxy} = getCurrentInstance()
const country = ref('cn')
const loading = ref(false)
const search_keys = ref([
  '微信',
  '抖音',
  '闲鱼',
  '王者荣耀',
  '蛋仔派对',
]);
const list = ref([])
const search_change = async (e) => {
  let value = e.target.value
  if (value.startsWith("https://apps.apple.com")) {
    value = value.split("/id")[1];
  }
  let res = null
  try {
    loading.value = true
    res = await proxy.axios.post(`https://itunes.apple.com/${country.value}/search?term=${encodeURIComponent(value)}&media=software&limit=21&entity=software&country=${country.value}`)
  } catch (e) {
    // loadTimeout.value = e.message.includes('timeout')
    return
  } finally {
    loading.value = false
  }
  list.value = res.data.results.map(item => {
    return {
      country: country.value,
      name: item.trackName,
      icon: item.artworkUrl100,
      appid: `${item.trackId}`,
      version: item.version,
      size: parseInt(item.fileSizeBytes),
      genres: item.genres.join('/'),
      minimumOsVersion: parseFloat(item.minimumOsVersion),
      free: item.formattedPrice === '免费' || item.formattedPrice === 'Free',
      price: item.formattedPrice
    }
  })
}
</script>

<template>
  <div class="mx-4 mt-10 space-y-10">
    <div class="flex flex-row flex-1 join my-2">
      <label class="input shadow-md flex items-center gap-2 flex-1 rounded-r-none">
        <i class="icon icon-search text-md"></i>
        <input type="text" @change="search_change" class="bg-base-100 grow" placeholder="请输入AppStore应用名字"/>
      </label>
      <div class="dropdown dropdown-bottom relative join-item">
        <div tabindex="0" role="button" class="btn rounded-l-none shadow-md space-x-3">
          <p>中国区</p>
          <i class="icon icon-carte-down text-sm"></i>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] rounded menu shadow-md bg-base-100 w-28 right-0">
          <li><a>中国区</a></li>
          <li><a>美国区</a></li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row justify-center">
      <div class="font-bold whitespace-nowrap text-base-content/30">
        大家都在搜：
      </div>
      <div class="flex flex-wrap space-x-4">
        <div v-for="world in search_keys">
          <a href="" class="whitespace-nowrap text-base-content/90 hover:text-inherit font-normal">{{ world }}</a>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <span v-if="loading" class="loading loading-spinner mx-auto"></span>
      <div v-else v-for="app in list"
           class="w-full mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300 hover:-translate-y-px hover:translate-x-px">
        <div class="flex flex-row bg-base-100 opacity-95 shadow rounded-md">
          <div class="flex flex-row flex-1 my-4 ml-4">
            <div class="flex flex-1 items-center min-w-14 max-w-14">
              <img class="w-14 h-14 rounded-md"
                   :src="app.icon"
                   :title="app.name"
                   :alt="app.name"/>
            </div>
            <div class="flex-col justify-around ml-2">
              <div class="flex items-center w-full lg:w-40 md:max-w-60">
                <strong class="md:truncate">{{ app.name }}</strong>
              </div>
              <div class="flex items-center text-sm size">
                <p class="text-accent">{{ app.genres }}</p>
              </div>
              <div class="flex items-center space-x-1 text-accent text-sm font-mono">
                <p>{{ Common.sizeFormat(app.size) }}</p>
                <p class="border-l h-3 rotate-12"></p>
                <p>{{ app.version }}</p>
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
