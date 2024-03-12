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
const functions = ref([
  {
    name: '我的提取',
    icon: 'icon-appstore',
    to: 'dump',
    color: 'text-default'
  }, {
    name: '下载记录',
    icon: 'icon-download',
    to: 'download'
  }, {
    name: '推广奖币',
    icon: 'icon-price',
    to: 'ad'
  }, {
    name: '我的设置',
    icon: 'icon-setting',
    to: 'setting'
  }
])
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
    <div class="px-4">
      <div class="flex flex-row justify-between items-center">
        <div>
          <strong class="text-sm">
            个人信息
          </strong>
        </div>
        <div>
          <button class="btn">
            <i class="icon icon-edit"></i>
            修改资料
          </button>
        </div>
      </div>
      <div class="flex flex-row space-x-4">
        <div class="relative">
          <div class="absolute inset-0 flex items-center justify-center -z-10">
            <span class="loading loading-spinner loading-sm"></span>
          </div>
          <img class="rounded-xl w-40 h-40" alt="用户头像" :src="data.icon"/>
        </div>
        <div class="mt-6 flex-1 space-y-8">
          <div>
            <div class="font-bold">{{ data.name }}</div>
            <div class="flex flex-row text-accent">
              <div>编号：<span>{{ data.id }}</span></div>
            </div>
          </div>
          <div class="flex flex-row justify-between items-center">
            <div class="space-x-4">
              <button class="btn btn-ghost btn-sm shadow rounded-full">
                <i class="icon icon-coin text-lg"></i>
                <div class="text-yellow-600">￥{{ data.coin }}</div>
              </button>
              <button class="btn btn-ghost btn-sm shadow rounded-full">
                <i class="icon icon-download text-lg"></i>
                <div>{{ data.download }}</div>
              </button>
            </div>
            <div class="flex flex-row space-x-2">
              <i class="icon icon-email text-lg"></i>
              <i class="icon icon-qq text-lg"></i>
              <i class="icon icon-wechat text-lg"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="divider mt-8"></div>
    </div>
    <div>
      <div class="flex flex-row justify-between items-center px-4">
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
      <div class="flex flex-wrap">
        <div class="item">
          <div class="item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="item-icon">
                <i class="icon icon-appstore text-xl"></i>
              </div>
              <div class="item-label">
                <h1 class="item-name">我的提取</h1>
                <div class="text-base-content/30 text-sm">提取过的所有应用</div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="item-icon">
                <i class="icon icon-download text-xl"></i>
              </div>
              <div class="item-label">
                <h1 class="item-name">下载记录</h1>
                <div class="text-base-content/30 text-sm">记录下载应用</div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="item-icon">
                <i class="icon icon-price text-xl text-success"></i>
              </div>
              <div class="item-label">
                <h1 class="text-success item-name">推广送币</h1>
                <div class="text-base-content/30 text-sm">邀请朋友注册使用可返币</div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="item-shadow">
            <div class="flex flex-row flex-1 my-4">
              <div class="item-icon">
                <i class="icon icon-price text-xl"></i>
              </div>
              <div class="item-label">
                <h1 class="item-name">我的设置</h1>
                <div class="text-base-content/30 text-sm">定制化您的设置</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.item {
  @apply w-full mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300;
  div.item-shadow {
    @apply dark-bg flex flex-row bg-base-100 opacity-95 shadow rounded-md px-4;
    &:hover {
      @apply transform -translate-y-px translate-x-px hover:shadow-md cursor-pointer;
      .item-name {
        @apply font-bold;
      }
    }

    div.item-icon {
      @apply flex flex-1 items-center justify-center max-w-10;
    }

    div.item-label {
      @apply flex-col flex-1;
    }
  }

}
</style>
