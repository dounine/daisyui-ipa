<script setup>
import {ref} from 'vue'

</script>

<template>
  <div class="flex flex-row px-4">
    <div class="grid grid-cols-2">
      <div class="flex flex-1 relative">
        <div class="absolute right-3 bg-[#5188EB] w-4 h-40 top-6 rounded-r-full -z-10"></div>
        <div class="absolute right-1 bg-[#E0738E] w-4 h-32 top-10 rounded-r-full -z-20"></div>
        <div
            class="blance-card w-screen max-w-screen-sm h-52 flex flex-row rounded-xl p-6 mr-6">
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
      <div class="bg-info/10 rounded-xl p-4">
        <div class="font-medium">
          帐户操作
        </div>
        <div>
          <button class="btn btn-sm btn-primary">充值</button>
          <button class="btn btn-sm">转帐</button>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped>
.blance-card {
  background: linear-gradient(129.96deg, #FF2F2F 10.43%, #000460 92.78%), radial-gradient(100% 246.94% at 100% 0%, #FFFFFF 0%, #020063 100%), linear-gradient(58.72deg, #2200F2 0%, #530000 100%), linear-gradient(154.03deg, #B70000 0%, #FF003D 74.04%), linear-gradient(341.1deg, #FF0000 7.52%, #0038FF 77.98%), linear-gradient(136.23deg, #00C2FF 11.12%, #FF0000 86.47%), radial-gradient(57.37% 100% at 50% 0%, #B50000 0%, #0034BB 100%);
  background-blend-mode: overlay, color-burn, screen, overlay, difference, difference, normal;
}
</style>
