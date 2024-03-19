<script setup>
import {getCurrentInstance, onBeforeMount, ref} from 'vue'

const {proxy} = getCurrentInstance()
const list = ref([])
const query = async () => {
  proxy.axios.get('/app/news').then(res => {
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
  <div class="space-y-4">
    <div class="flex items-center space-x-1">
      <i class="icon icon-new text-lg"></i>
      <strong class="text-sm">
        最新提取
      </strong>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      <div v-for="app in list"
           class="transition-transform duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">
        <div class="item">
          <div class="info">
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
          <div class="download-box">
            <RouterLink to="versions" class="download-link">
              <i class="icon icon-download download-icon"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  @apply dark-bg flex flex-row opacity-95 shadow transition-all duration-300 sm:hover:shadow-indigo-500/50 rounded-md px-4;
  .info {
    @apply flex flex-row flex-1 my-4;
    .img-box {
      @apply flex flex-1 items-center min-w-14 max-w-14 relative;

      .img {
        @apply w-14 h-14 rounded-md;
      }
    }

    .data-box {
      @apply flex-col flex-1 justify-around ml-2;

      .app-name {
        @apply flex items-center w-full xl:w-80 lg:w-44 md:max-w-60 xl:max-w-80;
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
