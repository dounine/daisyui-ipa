<script setup>
import {ref} from 'vue'
import PayMobile from './pay/Mobile.vue'
import PayPc from './pay/Pc.vue'

</script>

<template>
  <div>
    <div class="space-y-4">
      <div class="flex flex-row mt-8">
        <div class="flex flex-row items-center space-x-1">
          <i class="icon icon-crown text-lg"></i>
          <h1 class="font-medium">享受服务</h1>
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <h1 class="text-2xl font-medium">选择要支付的服务项</h1>
        </div>
        <div class="text-base-content/30">
          支付的金额将兑换成相应的服务
        </div>
      </div>
      <PayMobile class="lg:hidden"/>
      <PayPc class="hidden lg:block"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
