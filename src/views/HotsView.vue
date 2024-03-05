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
  <div>
    <div class="flex items-center mx-4 space-x-1">
      <i class="icon icon-app text-lg"></i>
      <strong class="text-sm">
        热门下载
      </strong>
    </div>
    <div class="flex flex-wrap">
      <div v-for="app in list"
           class="w-full mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300 hover:-translate-y-px hover:translate-x-px">
        <div class="flex flex-row opacity-95 shadow rounded-md px-4">
          <div class="flex flex-row flex-1 my-4">
            <div class="flex flex-1 items-center min-w-14 max-w-14">
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
                <p class="text-accent">{{ app.country }}</p>
              </div>
              <div class="flex items-center space-x-1 text-accent text-sm font-mono">
                <p>288MB</p>
                <p class="border-l h-3 rotate-12"></p>
                <p>1.2.2</p>
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
