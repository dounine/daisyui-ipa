<script setup>
import {getCurrentInstance, onBeforeMount, ref} from 'vue'

const {proxy} = getCurrentInstance()
const list = ref([])
const query = async () => {
  proxy.axios.get('/app/hots').then(res => {
    if (res.data.ok) {
      list.value = res.data.data
    }
  })
}
onBeforeMount(async () => {
  console.log('mounted')
  await query();
})

</script>

<template>
  <div>
    <div class="flex flex-col justify-center items-center mt-0 md:mt-10 space-y-4">
      <div class="font-bold text-3xl">
        欢迎使用
      </div>
      <div class="text-base-content/50">
        搜索AppStore上的应用提取出ipa文件下载
      </div>
      <div class="text-base-content/50">
        1,2,3 步骤完成即可下载
      </div>
      <div class="max-w-screen-lg w-full">
        <ul class="steps w-full">
          <li data-content="1" class="step text-sm">未提取</li>
          <li data-content="2" class="step text-sm">提取中</li>
          <li data-content="3" class="step text-sm">提取完成</li>
          <li data-content="✓" class="step text-sm step-neutral">下载</li>
        </ul>
      </div>
      <div class="text-base-content/30">
        请点击下方按钮开始使用
      </div>
      <RouterLink to="/search" class="text-inherit hover:text-inherit">
        <button class="btn rounded-full btn-outline">
          <span>搜索应用下载</span>
          <i class="icon icon-search"></i>
        </button>
      </RouterLink>
    </div>
    <div class="divider"></div>
    <div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div v-for="app in list"
             class="transition-transform duration-300 md:hover:-translate-y-px md:hover:translate-x-px">
          <div class="dump-item">
            <div class="dump-info">
              <div class="img-box">
                <div class="loading-box">
                  <span class="loading loading-spinner loading-sm text-base-content/30"></span>
                </div>
                <img class="img"
                     :src="app.icon"
                     :title="app.name"
                     :alt="app.name"/>
              </div>
              <div class="data-box">
                <div class="app-name">
                  <strong class="md:truncate">{{ app.name }}</strong>
                </div>
                <div class="app-country">
                  <span class="lowercase">{{ app.country }}</span>
                </div>
                <div class="app-size-version">
                  <span>288MB</span>
                  <span class="border-l h-3 rotate-12"></span>
                  <span>1.2.2</span>
                </div>
              </div>
            </div>
            <progress class="progress progress-primary h-1 m-0 p-0" value="20" max="100"></progress>
            <div class="flex flex-row justify-between py-2">
              <div class="text-sm space-x-1 flex flex-row items-center">
                <span class="font-medium font-mono">No.1</span>
                <span class="text-base-content/30">/</span>
                <span>排队中</span>
              </div>
              <div class="avatar-group -space-x-4">
                <div class="avatar">
                  <div class="w-8">
                    <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-8">
                    <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-8">
                    <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-8">
                    <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.dump-item {
  @apply dark-bg flex flex-col opacity-95 shadow transition-all duration-300 md:hover:shadow-indigo-500/50 rounded-md px-4;
  .dump-info {
    @apply flex flex-row flex-1 my-4 space-x-2 md:truncate;
    .img-box {
      @apply flex items-center min-w-14 max-w-14 relative;
      .img {
        @apply rounded-md;
      }
    }

    .data-box {
      @apply w-3/4;

      .app-name {
        @apply md:truncate;
      }

      .app-country {
        @apply flex items-center text-sm;
      }

      .app-size-version {
        @apply flex items-center space-x-1 text-sm font-mono;
      }
    }
  }

  .download-box {
    @apply flex items-end mb-3.5;
    .download-link {
      @apply text-inherit hover:text-inherit;
      .download-icon {
        @apply transition-all duration-300 text-xl cursor-pointer hover:text-info text-primary;
      }
    }
  }
}
</style>
