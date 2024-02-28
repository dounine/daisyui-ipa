<script setup>
import {ref} from 'vue'

const list = ref([
  {id: 1, name: 'Apple'},
  {id: 2, name: 'Banana'},
  {id: 3, name: '微信'},
  {id: 4, name: 'QQ'},
  {id: 5, name: 'Cherry'},
  {id: 6, name: '陌陌'},
  {id: 7, name: '王者'},
  {id: 8, name: '蛋仔派对asfdklasfaklsdfjlkajsfd'},
])
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <div class="flex items-center p-4">
      <i class="icon icon-app text-lg"></i>
      <strong class="text-sm">
        热门下载
      </strong>
    </div>
    <div class="flex flex-wrap">
      <div v-for="item in list"
           class="w-full mx-1 md:mx-0 lg:w-1/4 md:w-1/2 py-2 md:p-4 transition-transform duration-300 hover:-translate-y-px hover:translate-x-px">
        <div class="flex flex-row bg-base-100 opacity-95 shadow rounded-md">
          <div class="flex flex-row flex-1 my-4 ml-4">
            <div class="flex items-center">
              <img class="w-14 h-14 rounded-md"
                   src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/de/e8/a1/dee8a11e-43a4-10ad-cc39-f2c6cba8aff3/AppIcon-1x_U007emarketing-0-10-0-85-220.jpeg/512x512bb.jpg"
                   alt="图标"/>
            </div>
            <div class="flex-col flex-1 justify-around ml-2">
              <div class="flex items-center w-full lg:w-24">
                <strong class="truncate">{{ item.name }}</strong>
              </div>
              <div class="flex items-center text-sm size">
                <p class="text-accent">国区</p>
              </div>
              <div class="flex items-center space-x-1 text-accent text-sm font-mono">
                <p>288MB</p>
                <p class="border-l h-3 rotate-12"></p>
                <p>1.2.2</p>
              </div>
            </div>
          </div>
          <div class="flex items-end mb-3.5">
            <i class="icon icon-download text-xl cursor-pointer hover:text-info mr-2"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.size {
  font-family: yremp, Open Sans, pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif;
}
</style>
