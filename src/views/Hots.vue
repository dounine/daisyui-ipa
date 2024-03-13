<script setup>
import {getCurrentInstance, onBeforeMount, ref} from 'vue'

const {proxy} = getCurrentInstance()
const list = ref([])
const query = async () => {
  proxy.axios.get('/app/hots').then(res => {
    if (res.data.ok) {
      list.value = res.data.data
    }
  })
}
onBeforeMount(async () => {
  console.log('mounted')
  await query();
})

</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center mx-4 space-x-1">
      <i class="icon icon-app text-lg"></i>
      <strong class="text-sm">
        热门下载
      </strong>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4">
      <div v-for="app in list"
           class="transition-transform duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">
        <div class="dark-bg flex flex-row opacity-95 shadow rounded-md px-4">
          <div class="flex flex-row flex-1 my-4">
            <div class="flex flex-1 items-center min-w-14 max-w-14 relative">
              <div class="absolute inset-0 flex items-center justify-center -z-10">
                <span class="loading loading-spinner loading-sm text-base-content/30"></span>
              </div>
              <img class="w-14 h-14 rounded-md"
                   :src="app.icon"
                   :title="app.name"
                   :alt="app.name"/>
            </div>
            <div class="flex-col flex-1 justify-around ml-2">
              <div class="flex items-center w-full lg:w-44 md:max-w-60">
                <strong class="md:truncate">{{ app.name }}</strong>
              </div>
              <div class="flex items-center text-sm size">
                <span class="lowercase">{{ app.country }}</span>
              </div>
              <div class="flex items-center space-x-1 text-sm font-mono">
                <span>288MB</span>
                <span class="border-l h-3 rotate-12"></span>
                <span>1.2.2</span>
              </div>
            </div>
          </div>
          <div class="flex items-end mb-3.5">
            <RouterLink to="versions" class="text-inherit hover:text-inherit">
              <i class="icon icon-download text-xl cursor-pointer hover:text-info text-primary"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.size {
  font-family: yremp, Open Sans, pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif;
}
</style>
