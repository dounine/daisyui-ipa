<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'
import classNames from "classnames";

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
const close_dialog = () => {
  dump_dialog.value.close()
  setTimeout(() => {
    proxy.$router.push({
      name: 'version',
    })
  }, 300)
}
</script>

<template>
  <div>
    <dialog id="download_dialog" ref="dump_dialog" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <button @click="close_dialog" class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
          <i class="icon icon-close text-lg"></i>
        </button>
        <h3 class="font-bold text-lg">应用下载</h3>
        <div class="form-control mt-4">
<!--          <div class="flex flex-col space-y-2">-->
<!--            <div class="flex flex-row space-x-2">-->
<!--              <span class="text-base-content/50">应用:</span>-->
<!--              <span class="font-medium">方块消消乐</span>-->
<!--            </div>-->
<!--            <div class="flex flex-row space-x-2">-->
<!--              <span class="text-base-content/50">版本:</span>-->
<!--              <span class="font-medium">1.0.0</span>-->
<!--            </div>-->
<!--            <div class="flex flex-row space-x-2">-->
<!--              <span class="text-base-content/50">大小:</span>-->
<!--              <span class="font-mono font-medium">23.23GB</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="divider"></div>-->
          <div class="form-control divide-y divide-base-200">
            <label class="label cursor-pointer py-4">
              <div class="flex flex-row space-x-2">
                <div class="flex items-center">
                  <i class="icon icon-aliyunpan text-xl text-base-content/30"></i>
                </div>
                <div class="flex flex-1 flex-col space-y-1">
                  <span class="label-text text-base-content/30 font-medium">阿里云盘节点(维护中)</span>
                  <span class="text-sm text-base-content/30 font-medium">￥0.00</span>
                </div>
              </div>
              <input type="radio" name="radio-pay" class="radio" disabled/>
            </label>
            <label class="label cursor-pointer py-4">
              <div class="flex flex-row space-x-2">
                <div class="flex items-center">
                  <i class="icon icon-tianyi text-xl text-base-content/30"></i>
                </div>
                <div class="flex flex-1 flex-col space-y-1">
                  <span class="label-text text-base-content/30 font-medium">天翼云盘节点(维护中)</span>
                  <span class="text-sm text-base-content/30 font-medium">￥0.00</span>
                </div>
              </div>
              <input type="radio" name="radio-pay" class="radio" disabled/>
            </label>
            <label class="label cursor-pointer py-4">
              <div class="flex flex-row space-x-2">
                <div class="flex items-center">
                  <i class="icon icon-cdn text-xl"></i>
                </div>
                <div class="flex flex-1 flex-col space-y-1">
                  <span class="label-text font-medium">CDN不限速节点</span>
                  <span class="text-sm font-mono text-success">￥2.00</span>
                </div>
              </div>
              <input type="radio" name="radio-pay" :class="classNames('radio',{'radio-primary':true})" checked/>
            </label>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-8 space-x-10">
          <button class="btn btn-primary w-full">
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
