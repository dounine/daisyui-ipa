<script setup>
import {ref} from 'vue'

const data = ref({
  id: 1,
  name: '张三',
  icon: ''
})
</script>

<template>
  <div>
    <div class="flex flex-row">
      <div>
        <!--        头像-->
        <img alt="用户头像" :src="data.icon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
