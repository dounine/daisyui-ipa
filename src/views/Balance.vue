<script setup>
import {ref} from 'vue'

const data = ref({
  coin: '8.00',
})
const result = ref([
  {
    type: '下载',
    name: '微信',
    secondary: '版本1.0.0',
    coin: '-0.81',
    time: '2021-09-01 12:00:00',
  }, {
    type: '提取',
    name: '微信',
    secondary: '版本1.0.0',
    coin: '-0.01',
    time: '2021-09-01 11:00:00',
  }, {
    type: '收到',
    name: '用户1',
    secondary: '金币',
    coin: '+1.00',
    time: '2021-09-01 10:02:00',
  }, {
    type: '赠送',
    name: '用户123',
    secondary: '金币',
    coin: '-1.00',
    time: '2021-09-01 10:01:00',
  }, {
    type: '充值',
    name: '金额8.00',
    secondary: '',
    coin: '+8.00',
    time: '2021-09-01 10:00:00',
  }
])
</script>

<template>
  <div>
    <div class="px-4">
      <div class="grid sm:grid-flow-row sm:grid-cols-2 gap-4 mt-8">
        <div class="flex flex-1 relative max-w-screen-sm">
          <div class="absolute right-3 bg-[#5188EB] w-4 h-40 top-6 rounded-r-full -z-10"></div>
          <div class="absolute right-1 bg-[#E0738E] w-4 h-32 top-10 rounded-r-full -z-20"></div>
          <div
              class="blance-card w-full max-w-screen-sm h-52 flex flex-row rounded-xl p-6 mr-6">
            <div class="flex flex-1 flex-col">
              <div class="text-sm text-accent">13:00 / 2016-08-12</div>
              <div class="font-medium text-white mt-1">Coin account 金币帐号</div>
              <div class="flex flex-row items-center space-x-2 font-mono mt-8 text-xl text-white">
                <div>0000</div>
                <div>0001</div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-1 justify-center">
                <svg class="w-10 h-10 fill-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                      d="M320 160A80 80 0 1 0 320 0a80 80 0 1 0 0 160zM208 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM192 432A80 80 0 1 0 32 432a80 80 0 1 0 160 0zm128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm288-80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM432 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                </svg>
              </div>
              <div class="flex flex-col items-center">
                <div class="text-accent text-sm">金币余额</div>
                <div class="font-mono text-white font-bold">￥8.98</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between max-w-screen-sm space-y-2">
          <div class="flex flex-col rounded-xl dark-bg bg-[#EEF8F0] p-4 space-y-1">
            <div>
              累计充值
            </div>
            <div class="font-bold font-mono">
              ￥8.00
            </div>
          </div>
          <div class="flex flex-col rounded-xl dark-bg bg-[#FDF3E7] p-4 space-y-1">
            <div>
              累计收益
            </div>
            <div class="font-bold font-mono">
              ￥0.00
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-row justify-between mt-8 px-4">
        <div class="flex flex-row space-x-4">
          <button class="btn btn-primary">
            <i class="icon icon-pay"></i>
            <span>充值</span>
          </button>
          <button class="btn">
            <i class="icon icon-transfer"></i>
            <span>转赠</span>
          </button>
        </div>
        <div>
          <button class="btn btn-outline btn-ghost rounded-full border-base-content/30 font-normal">
            <i class="icon icon-filter"></i>
            <span>搜索</span>
          </button>
        </div>
      </div>
      <div class="grid gap-4 px-4 mt-4">
        <div v-for="item in result" class="dark-bg flex flex-row justify-between shadow px-4 py-2 rounded">
          <div class="flex flex-row space-x-2">
            <div class="flex items-center">
              <i class="icon icon-download"></i>
            </div>
            <div>
              <div class="flex flex-row space-x-1">
                <div>{{ item.type }}</div>
                <div class="font-bold">{{ item.name }}</div>
                <div>{{ item.secondary }}</div>
              </div>
              <div class="text-base-content/50">￥{{ item.coin }}</div>
            </div>
          </div>
          <div class="flex items-center">
            <button class="btn rounded-full btn-sm font-medium">
              查看
            </button>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <button class="btn rounded-full font-medium">加载更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blance-card {
  background: linear-gradient(129.96deg, #FF2F2F 10.43%, #000460 92.78%), radial-gradient(100% 246.94% at 100% 0%, #FFFFFF 0%, #020063 100%), linear-gradient(58.72deg, #2200F2 0%, #530000 100%), linear-gradient(154.03deg, #B70000 0%, #FF003D 74.04%), linear-gradient(341.1deg, #FF0000 7.52%, #0038FF 77.98%), linear-gradient(136.23deg, #00C2FF 11.12%, #FF0000 86.47%), radial-gradient(57.37% 100% at 50% 0%, #B50000 0%, #0034BB 100%);
  background-blend-mode: overlay, color-burn, screen, overlay, difference, difference, normal;
}
</style>
