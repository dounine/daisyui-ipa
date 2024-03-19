<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'
const {proxy} = getCurrentInstance()
const dump_dialog = ref(null)
onMounted(() => {
  dump_dialog.value.showModal()
})
const open_download = () => {
  proxy.$router.push({
    name: 'version_info_download',
  })
}
</script>

<template>
  <div>
    <dialog id="dump_dialog" ref="dump_dialog" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <button @click="proxy.$router.back()" class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
          <i class="icon icon-close text-lg"></i>
        </button>
        <h3 class="font-bold text-lg">应用下载</h3>
        <div class="form-control mt-4">
          <div class="flex justify-center">
            <ul class="steps w-full">
              <li data-content="1" class="step step-primary">未提取</li>
              <li data-content="2" class="step step-neutral">提取中</li>
              <li data-content="3" class="step step-neutral">提取完成</li>
              <li data-content="✓" class="step step-neutral">可以下载</li>
            </ul>
          </div>
          <div class="flex flex-col items-center mt-8">
            <div class="text-base-content/60">
              提取完成后即可下载！
            </div>
          </div>
          <progress class="progress progress-primary my-6" value="20" max="100"></progress>
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
              <span>未提取</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-8 space-x-10">
          <RouterLink to="download">
            <button class="btn btn-primary">
              <i class="icon icon-download"></i>
              <span>下载</span>
            </button>
          </RouterLink>
          <button class="btn btn-primary">
            <i class="icon icon-circle-right"></i>
            <span>提取</span>
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
</style>
