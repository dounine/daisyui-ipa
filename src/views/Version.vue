<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";

const {proxy} = getCurrentInstance()
const {country, app_id} = proxy.$route.params
const loading = ref(true)
const data = ref({
  info: {
    name: '方块消消乐2022',
    genres: '休闲',
    des: '消消乐',
    price: 0,
    minimumOsVersion: '14.0',
    country: 'cn',
    app_id: '123434',
    version: '1.0.0',
    size: '1 MB',
    icon: ''
  },
  versions: [
    {
      version: '1.0.3',
      size: '1 MB',
      time: '2024-02-03T14:14:14',
    }
  ]
})
const country_format = (country) => {
  return country === 'cn' ? '中国' : '美国'
}
const query = async () => {
  let res = null
  try {
    res = await proxy.axios.get(`/app/${country}/${app_id}/versions`)
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
    <router-view></router-view>
    <div v-if="loading" class="text-center">
      <i class="icon icon-loading text-base-content/50"></i>
    </div>
    <div v-else class="flex flex-col py-4 flex-1">
      <div class="flex flex-row justify-between">
        <div class="font-mono text-3xl">
          {{ data.info.name }}
        </div>
        <div class="flex justify-center items-center relative">
          <div class="loading-box">
            <span class="loading-box-spinner"></span>
          </div>
          <div>
            <img :src="data.info.icon" class="max-w-10 max-h-10 mask mask-squircle z-0" :alt="data.info.name"/>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex flex-row justify-between">
        <div class="text-base-content/30">
          {{ data.info.des }}
        </div>
        <div class="flex flex-row justify-center text-base-content/70 space-x-2 break-keep">
          <div>
            {{ country_format(data.info.country) }}
          </div>
          <div class="text-base-content/30">/</div>
          <div>
            {{ data.info.genres }}
          </div>
          <div class="text-base-content/30">/</div>
          <div>
            {{ data.info.price===0?'免费':`￥${(data.info.price/100).toFixed(2)}` }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div class="font-medium items-center flex space-x-2">
        <i class="icon icon-version"></i>
        <p>应用版本</p>
      </div>
    </div>
    <div v-if="loading" class="text-center">
      <span v-if="loading" class="loading loading-spinner"></span>
    </div>
    <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
      <div v-for="item in data.versions"
           class="transition-all duration-300 md:hover:-translate-y-px md:hover:translate-x-px">
        <div
            class="dark-bg transition-all flex flex-row bg-base-100 opacity-95 shadow md:hover:shadow-indigo-500/50 rounded-md px-4">
          <div class="flex flex-row flex-1 my-4">
            <div class="flex-col flex-1 justify-around ml-2">
              <div class="flex items-center w-full lg:w-44 md:max-w-60">
                <strong class="md:truncate">{{ item.version }}</strong>
              </div>
              <div class="flex items-center text-sm size">
                <div class="flex flex-row space-x-1 font-mono text-base-content/50">
                  <span>{{ item.size.split(' ')[0]}}</span>
                  <span>{{ item.size.split(' ')[1]}}</span>
                </div>
              </div>
              <div class="flex items-center space-x-1 text-base-content/50 text-sm font-mono">
                <p>{{ item.time }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-end mb-3.5">
            <RouterLink :to="`version/${item.version}/dump`">
              <i class="icon icon-download text-xl cursor-pointer transition-all duration-300 hover:text-info text-primary"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
