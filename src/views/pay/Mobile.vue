<script setup>
import {ref} from "vue";

const menus = ref([
  {
    money: '8',
    coin: '8',
  }, {
    money: '30',
    origin: '32',
    discount: '优惠',
    coin: '32',
  }, {
    money: '68',
    origin: '75',
    coin: '75',
    discount: '超值'
  }
])
//优惠英文
</script>

<template>
  <div>
    <div class="flex flex-col divide-y">
      <div class="flex flex-row py-4" v-for="item in menus">
        <div class="flex flex-1 flex-row items-center space-x-2">
          <div class="flex items-center space-x-1 text-lg">
            <div class="font-medium space-x-1">
              <span class="font-bold">{{ item.coin }}</span>
              <span>金币</span>
            </div>
            <div class="text-base-content/30">/</div>
            <div class="text-base-content/50">
              <span>￥</span>
              <span>{{ item.money }}</span>
            </div>
          </div>
          <div v-if="item.origin" class="line-through text-base-content/30">{{ item.origin }}</div>
          <div v-if="item.discount"
               class="text-sm items-center justify-center text-error border rounded px-1">
            {{ item.discount }}
          </div>
        </div>
        <div>
          <button class="btn bg-yellow-400 text-base-100">购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
