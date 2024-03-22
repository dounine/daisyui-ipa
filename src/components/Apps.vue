<script setup>
import {getCurrentInstance, defineProps, onBeforeMount, ref} from 'vue'
import classNames from "classnames";

const {proxy} = getCurrentInstance()
const {label, icon, url} = defineProps({
  label: String,
  icon: String,
  url: String
})
const list = ref([])
const query = async () => {
  proxy.axios.get(url).then(res => {
    if (res.data.ok) {
      list.value = res.data.data
    }
  })
}
onBeforeMount(async () => {
  await query();
})

</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center space-x-1">
      <i :class="classNames('icon','text-lg',icon)"></i>
      <strong class="text-sm">
        {{ label }}
      </strong>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      <div v-for="app in list"
           class="transition-transform duration-300 md:hover:-translate-y-px md:hover:translate-x-px">
        <div class="item">
          <div class="info">
            <div class="img-box">
              <div class="loading-box">
                <span class="loading-box-spinner"></span>
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
                <div class="flex flex-row space-x-1">
                  <span>{{ app.size.split(' ')[0] }}</span>
                  <span>{{ app.size.split(' ')[1] }}</span>
                </div>
                <span class="border-l h-3 rotate-12 border-base-content/40"></span>
                <span>{{ app.version }}</span>
              </div>
            </div>
          </div>
          <div class="download-box">
            <RouterLink to="1/version" class="download-link">
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
  @apply dark-bg flex flex-row opacity-95 shadow transition-all duration-300 md:hover:shadow-indigo-500/50 rounded-md px-4;
  .info {
    @apply flex flex-row flex-1 my-4 space-x-4 md:truncate;
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
        @apply flex items-center space-x-2 text-sm font-mono;
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
