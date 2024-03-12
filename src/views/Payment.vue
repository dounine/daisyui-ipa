<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <div class="px-4 space-y-4">
      <div class="flex flex-row">
        <div class="flex flex-row items-center text-info space-x-1">
          <i class="icon icon-crown text-lg"></i>
          <h1 class="font-medium">享受服务</h1>
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <h1 class="text-2xl text-primary font-medium">选择要支付的服务项</h1>
        </div>
        <div class="text-base-content/30">
          支付的金额将兑换成相应的服务
        </div>
      </div>
      <div class="flex flex-wrap">
        <div
            class="shadow mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">
          <div class="dark-bg opacity-95 shadow rounded-md px-4">
            <div class="flex justify-center">
              <svg class="w-20 h-20 fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    d="M160 112v48H288V112c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 96H48V416c0 26.5 21.5 48 48 48H352c26.5 0 48-21.5 48-48V208H336v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H160v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208zm0-48V112C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48V416c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48h64z"/>
              </svg>
            </div>
            <div>超级充值</div>
            <div class="font-bold font-mono"><span>￥</span><span>8.00</span></div>
            <div class="font-bold font-mono"><span>获得金币</span><span>8.00</span></div>
          </div>
        </div>
        <!--        <div-->
        <!--            class="mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300 sm:hover:-translate-y-px sm:hover:translate-x-px">-->
        <!--          <div>-->
        <!--            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">-->
        <!--              <path-->
        <!--                  d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0H24zM131.1 80H520.7L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8H161.6L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--          <div>豪华充值</div>-->
        <!--        </div>-->
        <!--        <div>-->
        <!--          <div>-->
        <!--            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">-->
        <!--              <path-->
        <!--                  d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--          <div>至尊充值</div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
