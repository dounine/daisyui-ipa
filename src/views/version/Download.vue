<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'
const {proxy} = getCurrentInstance()
const dump_dialog = ref(null)
onMounted(() => {
  dump_dialog.value.showModal()
})
const open_download = () => {
  proxy.$router.push({
    name: 'download',
    query: {
      u: localStorage.getItem('userid') || ''
    }
  })
}
</script>

<template>
  <div>
    <dialog id="download_dialog" ref="dump_dialog" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <button @click="proxy.$router.back()" class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
          <i class="icon icon-close text-lg"></i>
        </button>
        <h3 class="font-bold text-lg">应用下载</h3>
        <div class="form-control mt-4">
          <div class="flex justify-center">
            <ul class="steps w-full">
              <li data-content="1" class="step step-primary">未提取</li>
              <li data-content="2" class="step step-primary">提取中</li>
              <li data-content="3" class="step step-primary">提取完成</li>
              <li data-content="✓" class="step step-primary">可以下载</li>
            </ul>
          </div>
          <div class="flex flex-col items-center mt-8">
            <div class="text-base-content/60">
              提取完成后即可下载！
            </div>
          </div>
          <div class="divider"></div>
          <div class="flex flex-col space-y-2">
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">应用名称:</span>
              <span>方块消消乐</span>
            </div>
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">应用标识:</span>
              <span>com.tencent.weixin</span>
            </div>
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">应用版本:</span>
              <span>1.0.0</span>
            </div>
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">当前状态:</span>
              <span>可下载</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-8 space-x-10">
          <button class="btn btn-primary">
            <i class="icon icon-download"></i>
            <span>下载</span>
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
</style>
