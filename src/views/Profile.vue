<script setup>
import {getCurrentInstance, onBeforeMount, ref} from 'vue'

const {proxy} = getCurrentInstance();
const data = ref({
  id: 1,
  name: '张三',
  icon: '',
  coin: '0.00',
  download: 0,
})
const query = async () => {
  proxy.axios.get('/user/info').then(res => {
    if (res.data.ok) {
      data.value = res.data.data
    }
  }).catch(e => {
    console.error(e)
  })
}
onBeforeMount(async () => {
  await query();
})
</script>

<template>
  <div>
    <div>
      <div class="flex flex-row justify-between items-center">
        <div>
          <strong class="text-sm">
            个人信息
          </strong>
        </div>
        <div>
          <button class="btn btn-ghost">
            <i class="icon icon-edit"></i>
          </button>
        </div>
      </div>
      <div class="flex flex-row space-x-4">
        <div class="relative">
          <div class="absolute inset-0 flex items-center justify-center -z-10">
            <span class="loading loading-spinner loading-sm"></span>
          </div>
          <img class="mask mask-squircle w-40 h-40" alt="用户头像" :src="data.icon"/>
        </div>
        <div class="mt-6 flex-1 space-y-6 sm:space-y-8">
          <div>
            <div class="font-bold">{{ data.name }}</div>
            <div class="flex flex-row text-accent">
              <div class="text-sm flex flex-row items-center space-x-1">
                <i class="icon icon-id"></i>
                <span>{{ data.id }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between items-start sm:items-center">
            <div class="space-x-4">
              <RouterLink to="balance">
                <button class="dark-bg btn btn-ghost btn-sm shadow rounded-full">
                  <i class="icon icon-coin text-lg"></i>
                  <div class="font-mono">￥{{ data.coin }}</div>
                </button>
              </RouterLink>
              <button class="dark-bg btn btn-ghost btn-sm shadow rounded-full">
                <i class="icon icon-download text-lg"></i>
                <div class="font-mono">{{ data.download }}</div>
              </button>
            </div>
            <div class="flex flex-row space-x-4 text-xl">
              <i class="icon icon-email"></i>
              <i class="icon icon-qq"></i>
              <i class="icon icon-wechat"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="divider mt-8"></div>
    </div>
    <div>
      <div class="flex flex-row justify-between items-center">
        <div>
          <h1>
            功能中心
          </h1>
        </div>
        <div>
          <!--          <button class="btn">-->
          <!--            <i class="icon icon-plus"></i>-->
          <!--            添加应用-->
          <!--          </button>-->
        </div>
      </div>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
        <div class="profile-item">
          <div class="profile-item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="profile-item-icon">
                <i class="icon icon-appstore text-xl"></i>
              </div>
              <div class="profile-item-label">
                <h1 class="profile-item-name">我的提取</h1>
                <div class="text-base-content/30 text-sm">提取过的所有应用</div>
              </div>
            </div>
            <div class="profile-item-right">
              <i class="icon icon-right"></i>
            </div>
          </div>
        </div>

        <div class="profile-item">
          <div class="profile-item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="profile-item-icon">
                <i class="icon icon-download text-xl"></i>
              </div>
              <div class="profile-item-label">
                <h1 class="profile-item-name">下载记录</h1>
                <div class="text-base-content/30 text-sm">记录下载应用</div>
              </div>
            </div>
            <div class="profile-item-right">
              <i class="icon icon-right"></i>
            </div>
          </div>
        </div>

        <div class="profile-item">
          <div class="profile-item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="profile-item-icon">
                <i class="icon icon-price text-xl text-success"></i>
              </div>
              <div class="profile-item-label">
                <h1 class="text-success item-name">推广送币</h1>
                <div class="text-base-content/30 text-sm">邀请朋友注册使用可返币</div>
              </div>
            </div>
            <div class="profile-item-right">
              <i class="icon icon-right"></i>
            </div>
          </div>
        </div>

        <div class="profile-item">
          <div class="profile-item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="profile-item-icon">
                <i class="icon icon-setting text-xl"></i>
              </div>
              <div class="profile-item-label">
                <h1 class="profile-item-name">我的设置</h1>
                <div class="text-base-content/30 text-sm">定制化您的设置</div>
              </div>
            </div>
            <div class="profile-item-right">
              <i class="icon icon-right"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.profile-item {
  div.profile-item-shadow {
    @apply duration-300 transition-all dark-bg flex flex-row bg-base-100 opacity-95 shadow rounded-md px-4;
    &:hover {
      @apply -translate-y-px translate-x-px shadow-indigo-500/50 cursor-pointer;
    }

    div.profile-item-right {
      @apply md:hidden flex items-center;
    }

    div.profile-item-icon {
      @apply flex flex-1 items-center justify-center max-w-10;
    }

    div.profile-item-label {
      @apply flex-col flex-1;
    }
  }

}
</style>
