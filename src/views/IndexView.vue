<template>
  <div>
    <div class="flex flex-row mx-4 max-w-screen-md mx-auto">
      <button v-if="ipa.enable" @click="openIpa" class="btn bg-base-200 bg-opacity-50 btn-ghost normal-case ml-2">
        <i v-if="ipa.icon.startsWith('icon')" :class="'icon '+ipa.icon+' text-xl'"></i>
        <img v-else :src="ipa.icon" class="w-8 h-8 mr-2 mask mask-squircle"/>
        {{ ipa.name }}
      </button>
      <div class="flex-1">
      </div>
      <div class="mr-2">
        <Menu
            :list="app.list.filter(i=>i.id!==activeApp.id && i.enable)"
            :text="activeApp.name"
            :icon="activeApp.icon"
            @itemClick="changeType"
        ></Menu>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex justify-center">
        <Menu
            :list="versions.filter(i=>i.id!==activeVersion.id && i.enable)"
            :text="activeVersion.name"
            :icon="activeVersion.icon"
            @itemClick="versionChangeType"
        ></Menu>
      </div>
      <div class="p-4 pb-24">
        <div class="flex flex-row justify-center">
          <div class="w-full max-w-screen-md">
            <div class="navbar" v-for="item in activeVersion.fields.filter(i=>i.enable)">
              <div>
                <span class="normal-case break-keep">{{ item.name }}</span>
              </div>
              <div class="ml-2 flex flex-1 justify-end">
                <input v-if="item.type==='script'" type="text" :placeholder="item.placeholder || ''"
                       class="common-input" v-model="item.value"/>
                <span v-else-if="item.type==='text'" class="text-accent">
                {{ item.value }}
                </span>
                <img v-else-if="item.type==='image'" :src="item.value" class="w-8 h-8 mask mask-squircle"/>
                <div v-else-if="item.type==='link'" class="text-accent">
                  <a :href="item.link" class="btn btn-ghost pr-0 text-accent font-normal normal-case break-all">
                    {{ item.value || '' }}
                    <i class="icon icon-right text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div v-if="activeVersion.share && activeVersion.share.enable" class="navbar">
              <div>
                <span class="normal-case">{{ activeVersion.share.name }}</span>
              </div>
              <div class="ml-2 flex flex-1 justify-end">
                <input :disabled="signing" type="checkbox" v-model="activeVersion.share.default" class="toggle"/>
              </div>
            </div>
            <div v-if="activeVersion.share && activeVersion.share.enable && activeVersion.share.default" class="navbar">
              <div>
                <span class="normal-case">{{ activeVersion.share.value }}</span>
              </div>
              <div class="ml-2 flex flex-1 justify-end">
                <Menu
                    :list="p12List.list.filter(i=>i.enable==='true' || i.enable===true)"
                    :text="activeP12.name"
                    :icon="activeP12.icon"
                    @itemClick="p12ChangeType"
                ></Menu>
                <a v-if="activeVersion.share && activeVersion.share.download" :href="activeP12.downloadUrl"
                   class="btn btn-ghost">
                  <i class="icon icon-download text-lg"></i>
                </a>
              </div>
            </div>
            <div v-else>
              <div v-if="activeVersion.type==='ipa'" class="navbar">
                <div>
                  <span class="normal-case">P12证书</span>
                </div>
                <div class="ml-2 flex flex-1 justify-end">
                  <input :disabled="signing" type="file" accept=".p12" id="p12file" single
                         class="p12-input"/>
                </div>
              </div>
              <div v-if="activeVersion.type==='ipa'" class="navbar">
                <div>
                  <span class="normal-case">MP文件</span>
                </div>
                <div class="ml-2 flex flex-1 justify-end">
                  <input :disabled="signing" type="file" accept=".mobileprovision" id="mpfile" single
                         class="p12-input"/>
                </div>
              </div>
              <div v-if="activeVersion.type==='ipa'" class="navbar">
                <div>
                  <span class="normal-case">证书密码</span>
                </div>
                <div class="ml-2 flex flex-1 justify-end">
                  <input :disabled="signing" v-model="password" type="text" placeholder="证书密码"
                         class="input input-bordered border-neutral-content w-full text-right max-w-xs bg-opacity-40"/>
                </div>
              </div>
            </div>
            <div v-if="activeVersion.setting" class="navbar">
              <div class="flex-1">
                <span class="normal-case">设置(选填)</span>
              </div>
              <div class="mr-2">
                <input :disabled="signing" type="checkbox" v-model="moreSettings" class="toggle"
                       :checked="moreSettings"/>
              </div>
            </div>
            <div v-if="activeVersion.setting && moreSettings" class="border-dashed border-2 rounded py-1 px-4 mx-2">
              <div class="navbar">
                <div class="flex-1">
                  <span class="normal-case">开启应用多开</span>
                </div>
                <div class="ml-2 flex-1 justify-end">
                  <input :disabled="signing" type="checkbox" v-model="enableMulti" class="toggle"/>
                </div>
              </div>
              <div class="navbar">
                <div class="flex-1">
                  <span class="normal-case">开启文件访问</span>
                </div>
                <div class="ml-2 flex-1 justify-end">
                  <input :disabled="signing" type="checkbox" v-model="enableFileAccess" class="toggle"/>
                </div>
              </div>
              <div class="navbar">
                <div class="flex-1">
                  <span class="normal-case">移除应用跳转</span>
                </div>
                <div class="ml-2 flex-1 justify-end">
                  <input :disabled="signing" type="checkbox" v-model="disableUrls" class="toggle"/>
                </div>
              </div>
              <div class="navbar">
                <div class="flex-1">
                  <span class="normal-case">移除内置签名</span>
                </div>
                <div class="ml-2 flex-1 justify-end">
                  <input :disabled="signing" type="checkbox" v-model="disableEmbedded" class="toggle"/>
                </div>
              </div>
              <div class="navbar">
                <div class="flex-1">
                  <span class="normal-case">移除插件</span>
                </div>
                <div class="ml-2 flex-1 justify-end">
                  <input :disabled="signing" type="checkbox" v-model="disablePlugins" class="toggle"/>
                </div>
              </div>
              <div class="navbar">
                <div class="flex-1">
                  <span class="normal-case">应用设置</span>
                </div>
                <div class="ml-2 flex-1 justify-end">
                  <input :disabled="signing" type="checkbox" v-model="appSetting" class="toggle"/>
                </div>
              </div>
              <div v-if="appSetting">
                <div class="navbar">
                  <div class="flex flex-1">
                    <span class="normal-case">应用图标</span>
                  </div>
                  <div class="ml-2 flex flex-1 w-full max-w-xs justify-end">
                    <input :disabled="signing" @change="bundleIconChange" type="file" accept=".png"
                           id="bundleIconFile" single
                           class="p12-input"/>
                    <img v-if="bundleIconSrc" :src="bundleIconSrc" class="w-8 h-8 ml-2 mask mask-squircle"/>
                  </div>
                </div>
                <div class="navbar">
                  <div class="flex-1">
                    <span class="normal-case">应用名称</span>
                  </div>
                  <div class="ml-2 flex-1 justify-end">
                    <input :disabled="signing" v-model="bundleName" type="text" placeholder="选填"
                           class="more-input"/>
                  </div>
                </div>
                <div class="navbar">
                  <div class="flex-1">
                    <span class="normal-case">应用包id</span>
                  </div>
                  <div class="ml-2 flex-1 justify-end">
                    <input :disabled="signing" v-model="bundleId" type="text" placeholder="选填"
                           class="more-input"/>
                  </div>
                </div>
                <div class="navbar">
                  <div class="flex-1">
                    <span class="normal-case">应用版本</span>
                  </div>
                  <div class="ml-2 flex-1 justify-end">
                    <input :disabled="signing" v-model="bundleVersion" type="text" placeholder="选填"
                           class="more-input"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-4"></div>
            <div v-if="activeVersion.type==='links'" v-for="linkItem in (activeVersion.links||[]).filter(i=>i.enable)">
              <button
                  @click="install(activeVersion,linkItem)"
                  class="btn btn-neutral btn-block btn-circle shadow normal-case">
                <i v-if="linkItem.btnIcon.startsWith('icon')" :class="'icon '+linkItem.btnIcon+' text-base'"></i>
                <img v-else :src="linkItem.btnIcon" class="w-6 h-6 mr-2"/>
                {{ linkItem.btnText }}
              </button>
              <div class="flex justify-center pt-2 pb-4 text-accent">
                {{ linkItem.description }}
              </div>
            </div>
            <button :disabled="signing" v-else @click="install(activeVersion,null)"
                    class="btn btn-neutral btn-block btn-circle shadow">
              <i :class="'icon '+activeVersion.btnIcon+' text-base'"></i>
              {{ activeVersion.btnText }}
            </button>
            <div v-if="activeVersion.description" class="flex justify-center pt-5 text-accent px-4">
              {{ activeVersion.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, onBeforeMount, getCurrentInstance, onBeforeUnmount, watch} from "vue";
import Menu from "@/components/Menu.vue";
import Common from "@/util/common.js";

const ipa = ref(window.sign_ipa)
const app = ref(window.sign_app)
const activeApp = ref({})
const versions = ref([])
const activeVersion = ref({})
const {proxy} = getCurrentInstance();
const password = ref('')
const bundleId = ref('')
const bundleName = ref('')
const bundleIcon = ref('')
const bundleIconSrc = ref('')
const bundleVersion = ref('')
const enableMulti = ref(false)
const enableFileAccess = ref(false)
const disableUrls = ref(false)
const disableEmbedded = ref(false)
const disablePlugins = ref(false)
const appSetting = ref(false)
const mding = ref(0)
const moreSettings = ref(false)
const signing = ref(false)
let {cType} = proxy.$route.query
const percentage = ref(0)
const p12List = ref(window.sign_p12)
const activeP12 = ref({
  name: '',
  path: ''
})
let processQuery = null
const install = async (item, linkItem) => {
  for (let i of (item.fields || [])) {
    if (i.type === 'script' && i.compare) {
      if (i.script === "get_system_version") {
        if (i.emptyTip && !i.value) {
          proxy.$dialog.warning({
            title: '提示',
            content: i.emptyTip
          })
          return
        }
        let compareValue = i.compareValue
        compareValue = compareValue.replace(/(\$value)/g, `'${i.value}'`)
        if (!eval(compareValue)) {
          proxy.$dialog.warning({
            title: '提示',
            content: i.compareFalseTip
          })
          return
        }
      }
    }
  }
  if (item.type === 'link') {
    window.location.href = item.value
    return
  } else if (item.type === 'links') {
    window.location.href = linkItem.link
    return
  }
  await submit(item)
}
const getInputValue = (item) => {
  if (item.script === 'get_system_version') {
    return Common.get_system_version()
  }
  return ''
}
const submit = async (item) => {
  if (!((activeVersion.value.share || {}).enable && (activeVersion.value.share || {}).default)) {
    if (!checkFiles()) {
      return;
    }
  }
  if (signing.value) {
    return;
  }
  signing.value = true
  activeVersion.value.btnText = '正在签名...'
  mding.value = 1
  let formData = new FormData()
  if ((activeVersion.value.share || {}).enable && (activeVersion.value.share || {}).default) {
    formData.append('share', activeP12.value.name)
  } else {
    let p12file = document.querySelector('#p12file').files[0]
    let mpfile = document.querySelector('#mpfile').files[0]
    formData.append('p12', p12file)
    formData.append('mp', mpfile)
    formData.append('password', password.value || '')
  }
  if (bundleIconSrc.value.startsWith('data:image')) {
    let convertRes = await proxy.axios.post('/admin/file/image/convert', {
      data: bundleIconSrc.value.trim()
    })
    if (convertRes.data.code) {
      bundleIcon.value = convertRes.data.data.path
    }
  }
  formData.append('filePath', activeVersion.value.value)
  formData.append('bundleId', bundleId.value.trim())
  formData.append('bundleName', bundleName.value.trim())
  formData.append('bundleVersion', bundleVersion.value.trim())
  formData.append('bundleIcon', bundleIcon.value.trim())
  formData.append('enableFileAccess', enableFileAccess.value)
  formData.append('disableUrls', disableUrls.value)
  formData.append('disableEmbedded', disableEmbedded.value)
  formData.append('disablePlugins', disablePlugins.value)
  formData.append('enableMulti', enableMulti.value)
  try {
    let result = await proxy.axios.post('/sign/ipa', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (!result.data.code) {
      activeVersion.value.btnText = '重新签名'
      signing.value = false
      setTimeout(function () {
        proxy.$dialog.error({
          content: result.data.msg || '签名异常'
        })
      });
      return
    }
    mding.value = 2
    percentage.value = 1
    try {
      clearInterval(processQuery)
    } catch (e) {

    }
    try {
      processQuery = setInterval(async () => {
        let processRes = await Common.retry(proxy.axios.get(result.data.data.process))
        if (processRes.data.code) {
          activeVersion.value.btnText = processRes.data.data.msg
          if (processRes.data.data.status === -1) {
            try {
              clearInterval(processQuery)
            } catch (e) {

            }
            signing.value = false
            proxy.$dialog.error({
              content: processRes.data.data.msg
            })
            return
          }
          if (processRes.data.data.process) {
            percentage.value = processRes.data.data.process
          }
          if (processRes.data.data.status === 1) {
            signing.value = false
            activeVersion.value.btnText = '重新签名'
            try {
              clearInterval(processQuery)
            } catch (e) {

            }
            proxy.$qrcode.show({
              title: '请选择安装方式',
              qrcode: processRes.data.data.info.qrcode,
              link: processRes.data.data.info.link,
              text: '可扫码安装、或者点击链接安装'
            })
          }
        }
      }, 1000)
    } catch (e) {
      clearInterval(processQuery)
    }
  } catch (e) {
    activeVersion.value.btnText = '重新签名'
    signing.value = false
    setTimeout(function () {
      proxy.$dialog.error({
        text: `签名异常、请联系管理员修复:${e}`
      })
    });
  }
}
const checkFiles = () => {
  let p12file = document.querySelector('#p12file').files[0]
  if (!p12file) {
    proxy.$dialog.info({
      content: `请上传p12证书`
    })
    return false
  }
  if (p12file.size === 0) {
    proxy.$dialog.info({
      content: `p12文件内容为空`
    })
    return false
  }
  let mpfile = document.querySelector('#mpfile').files[0]
  if (!mpfile) {
    proxy.$dialog.info({
      content: `请上传mp描述文件`
    })
    return false
  }
  if (mpfile.size === 0) {
    proxy.$dialog.info({
      content: `mp描述文件内容为空`
    })
    return false
  }
  if (!p12file.name.endsWith('.p12')) {
    proxy.$dialog.info({
      content: `请上传正确的.p12结尾文件`
    })
    return false
  }
  if (!mpfile.name.endsWith('.mobileprovision')) {
    proxy.$dialog.info({
      content: `请上传正确的.mobileprovision结尾文件`
    })
    return false
  }
  // if (!password.value) {
  //   proxy.$dialog.info({
  //     content: `请输入p12证书密码`
  //   })
  //   return false
  // }
  return true
}
const bundleIconChange = async (e) => {
  let file = document.getElementById('bundleIconFile').files[0]
  if (!file) {
    return
  }
  if (!['.png', '.jpg', 'jpeg'].find(i => file.name.endsWith(i))) {
    proxy.$dialog.info({
      content: `请上传正确的.png/.jpg/.jpeg结尾文件`
    })
    return
  }
  let icon = await new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      resolve(e.target.result)
    }
  })
  bundleIconSrc.value = icon
}
const initActiveMenu = () => {
  let currentRouterName = proxy.$route.params.name
  if (currentRouterName === 'home' || !currentRouterName) {
    let firstApp = app.value.list[0]
    proxy.$router.push({
      path: '/home/' + firstApp.id,
      query: {
        cType: firstApp.versions[0].id
      }
    })
    activeApp.value = firstApp
    return true
  } else {
    let findApp = app.value.list.find(i => i.id === currentRouterName)
    if (findApp) {
      activeApp.value = findApp
    }
  }
  return false
}
const changeType = async (select) => {
  proxy.$router.push({
    path: '/home/' + select.id,
    query: {
      cType: select.versions[0].id
    }
  })
  cType = select.versions[0].id
  activeApp.value = select
  initVersionMenu()
}
const versionChangeType = async (v) => {
  proxy.$router.push({
    path: '/home/' + proxy.$route.params.name,
    query: {
      cType: v.id
    }
  })
  activeVersion.value = versions.value.find(i => i.id === v.id)
  if (activeVersion.value.share && activeVersion.value.share.enable && p12List.value.list[0]) {
    activeP12.value = p12List.value.list[0]
  }
}
const p12ChangeType = (v) => {
  activeP12.value = v
}
const openIpa = () => {
  proxy.$router.push({
    name: "ipa"
  })
}
const initVersionMenu = (isPush) => {
  let appItem = window.sign_app.list.find(i => i.id === activeApp.value.id)
  let _cType = appItem.versions[0].id
  if (cType) {
    _cType = cType
  } else if (!proxy.$route.query.name) {
    if (!isPush) {
      proxy.$router.push({
        name: 'home',
        query: {
          cType: _cType
        }
      })
    }
  }
  versions.value = appItem.versions
  let findVersion = appItem.versions.find(i => i.id === _cType)
  if (findVersion) {
    activeVersion.value = findVersion
  } else {
    activeVersion.value = appItem.versions[0]
  }
  if (activeVersion.value.share && activeVersion.value.share.enable && p12List.value.list[0]) {
    activeP12.value = p12List.value.list[0]
  }
}
onBeforeUnmount(async () => {
  try {
    clearInterval(processQuery)
  } catch (e) {

  }
})
watch(
    () => proxy.$route.path,
    () => {
      if (proxy.$route.path === '/home') {
        let isPush = initActiveMenu()
        initVersionMenu(isPush)
      }
    }
);
onBeforeMount(async () => {
  let isPush = initActiveMenu()
  initVersionMenu(isPush)
  for (let item of activeVersion.value.fields) {
    if (item.type === 'script' && item.script === 'get_system_version') {
      item.value = getInputValue(item)
    }
  }
})
</script>


<style>
.common-input {
  @apply input input-bordered border-neutral-content w-full max-w-sm text-right bg-opacity-40;
}

.p12-input {
  @apply text-accent file-input file-input-bordered border-neutral-content file-input-md max-w-xs w-full bg-opacity-40;
}

.more-input {
  @apply input input-bordered border-neutral-content w-full max-w-xs text-right bg-opacity-40;
}
</style>
