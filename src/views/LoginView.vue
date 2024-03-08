<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="flex h-screen justify-center">
    <div class="hidden md:flex items-center">
      <img alt="login" class="object-cover w-full h-2/3 rounded-xl" src="../assets/login-bg.png"/>
    </div>
    <div class="flex items-center">
      <div class="flex-col space-y-10 w-screen md:max-w-screen-sm w-full">
        <div class="flex flex-col p-10 bg-base-100 space-y-6 rounded-lg">
          <div class="flex flex-col">
            <div class="space-y-8">
              <div class="flex">
                <i class="icon icon-apple text-3xl text-primary"></i>
              </div>
              <div class="flex">
                <h1 class="text-2xl">欢迎回来</h1>
              </div>
            </div>
            <div class="mt-2">
              <span class="text-base-content/50 text-sm">使用邮箱获取难码可一键完成登录或者注册</span>
            </div>
          </div>
          <div class="flex flex-col space-y-8">
            <label class="space-y-2">
              <div>邮箱地址</div>
              <input type="text" class="input input-bordered w-full"/>
            </label>
            <label class="space-y-2">
              <div>验证码</div>
              <div class="flex flex-row space-x-2">
                <input type="text" class="input input-bordered w-full"/>
                <button class="btn btn-ghost border-accent">验证码</button>
              </div>
            </label>
          </div>
          <div>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="checkbox"/>
              <div>
                记住我
              </div>
            </label>
          </div>
          <div>
            <button class="btn btn-primary w-full text-white">登 录</button>
          </div>
          <div class="divider text-sm">或其它方式登录</div>
          <div class="flex flex-row space-x-6">
            <button class="flex-1 btn btn-ghost border-accent space-x-2">
              <i class="icon icon-wechat text-2xl text-green-600"></i>
              <span>微信</span>
            </button>
            <button class="flex-1 btn btn-ghost border-accent space-x-2">
              <i class="icon icon-qq text-2xl text-indigo-500"></i>
              <span>QQ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
