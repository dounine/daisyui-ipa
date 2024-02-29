<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="flex flex-row justify-around text-sm">
    <div>
      <strong>站点服务</strong>
      <div class="mt-1">
        <div>云服务器</div>
        <div>ipa在线签名</div>
      </div>
    </div>
    <div>
      <strong>联系我们</strong>
      <div class="mt-1">
        <div>联系站长</div>
        <div>加入QQ群</div>
      </div>
    </div>
    <div>
      <strong>技术文档</strong>
      <div class="mt-1">
        <div>代理站点</div>
        <div>接口文档</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
