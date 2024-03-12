<script setup>
import {getCurrentInstance, onBeforeMount, ref} from 'vue'

const {proxy} = getCurrentInstance();
const data = ref({
  id: 1,
  name: '张三',
  icon: '',
  coin: '0.00',
  download: 0,
})
const query = async () => {
  proxy.axios.get('/user/info').then(res => {
    if (res.data.ok) {
      data.value = res.data.data
    }
  }).catch(e => {
    console.error(e)
  })
}
onBeforeMount(async () => {
  await query();
})
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row justify-between items-center">
      <div>
        <strong class="text-sm">
          个人信息
        </strong>
      </div>
      <div>
        <button class="btn">
          <i class="icon icon-edit"></i>
          修改资料
        </button>
      </div>
    </div>
    <div class="flex flex-row space-x-4">
      <div class="relative">
        <div class="absolute inset-0 flex items-center justify-center -z-10">
          <span class="loading loading-spinner loading-sm"></span>
        </div>
        <img class="rounded-xl w-40 h-40" alt="用户头像" :src="data.icon"/>
      </div>
      <div class="mt-6 flex-1 space-y-8">
        <div>
          <div class="font-bold">{{ data.name }}</div>
          <div class="flex flex-row text-accent">
            <div>编号：<span>{{ data.id }}</span></div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center">
          <div class="space-x-4">
            <button class="btn btn-ghost btn-sm shadow rounded-full">
              <i class="icon icon-coin text-lg"></i>
              <div class="text-yellow-600">￥{{ data.coin }}</div>
            </button>
            <button class="btn btn-ghost btn-sm shadow rounded-full text-primary">
              <i class="icon icon-download text-lg"></i>
              <div>{{ data.download }}</div>
            </button>
          </div>
          <div class="flex flex-row space-x-2">
            <i class="icon icon-email text-lg"></i>
            <i class="icon icon-qq text-lg"></i>
            <i class="icon icon-wechat text-lg"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div>
<div class="flex flex-row justify-between items-center">
        <div>
          <strong class="text-sm">
            我的应用
          </strong>
        </div>
        <div>
          <button class="btn">
            <i class="icon icon-plus"></i>
            添加应用
          </button>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">
          <div class="dark-bg flex flex-row bg-base-100 opacity-95 shadow rounded-md px-4">
            <div class="flex flex-row flex-1 my-4">
              <div class="flex flex-1 items-center min-w-14 max-w-14 relative">
                <div class="absolute inset-0 flex items-center justify-center -z-10">
                  <span class="loading loading-spinner loading-sm"></span>
                </div>
                <img class="w-14 h-14 rounded-md" alt="应用图标" :src="data.icon"/>
              </div>
              <div class="flex-col flex-1 justify-around ml-2">
                <div class="flex items-center w-full lg:w-44 md:max-w-60">
                  <strong class="md:truncate">{{ data.name }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
