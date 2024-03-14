<script setup>
import {ref} from "vue";

const menus = ref([
  {
    money: '8',
    coin: '8',
  }, {
    money: '30',
    origin: '32',
    discount: '优惠',
    coin: '32',
  }, {
    money: '68',
    origin: '75',
    coin: '75',
    discount: '超值'
  }
])
//优惠英文
</script>

<template>
  <div>
    <dialog id="my_mobile_pay" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
            <i class="icon icon-close text-lg"></i>
          </button>
        </form>
        <h3 class="font-bold text-lg">选择支付方式</h3>
        <div class="form-control divide-y divide-base-200 mt-4">
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M386.56 627.2c-5.12 2.56-10.24 5.12-15.36 5.12-12.8 0-23.04-7.68-28.16-17.92l-2.56-5.12-89.6-197.12c-2.56-2.56-2.56-2.56-2.56-5.12 0-7.68 7.68-17.92 17.92-17.92 5.12 0 7.68 2.56 10.24 2.56l104.96 76.8c7.68 5.12 17.92 7.68 28.16 7.68 5.12 0 10.24-2.56 17.92-2.56l501.76-222.72C834.56 145.92 688.64 76.8 522.24 76.8 248.32 76.8 25.6 261.12 25.6 488.96c0 122.88 66.56 235.52 171.52 309.76 7.68 5.12 15.36 15.36 15.36 25.6 0 5.12-2.56 7.68-2.56 10.24-7.68 30.72-20.48 79.36-23.04 81.92-2.56 5.12-2.56 7.68-2.56 12.8 0 7.68 7.68 17.92 17.92 17.92 5.12 0 7.68-2.56 10.24-2.56l110.08-61.44c7.68-5.12 17.92-7.68 28.16-7.68 5.12 0 10.24 2.56 15.36 2.56 51.2 15.36 104.96 23.04 161.28 23.04C801.28 901.12 1024 716.8 1024 488.96c0-69.12-20.48-133.12-56.32-189.44L389.12 624.64l-2.56 2.56z"
                    fill="#00C801" p-id="15823"></path>
              </svg>
              <span class="label-text">微信支付</span>
            </div>
            <input type="radio" name="mobile-radio-pay" class="radio" checked/>
          </label>
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4c-13.8 47.6-32.4 92.3-54.5 132.9-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z"
                    fill="#1296DB" p-id="17630"></path>
              </svg>
              <span class="label-text text-base-content/30">支付宝(维护中)</span>
            </div>
            <input type="radio" name="mobile-radio-pay" class="radio" disabled/>
          </label>
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M173.871355 444.23901v-3.050173c12.158912-51.560472 9.108738-105.878635 21.225867-160.656415 18.384609-109.095942 90.962032-209.124929 193.87406-254.41792s227.342406-30.292822 312.245873 39.40156c72.744556 60.627427 112.146116 157.648024 121.171288 251.618446a83.566405 83.566405 0 0 1-3.050174 27.284431c-3.008391 9.108738-12.117129 15.167303-18.175693 21.225867l-260.685401 209.166713c-9.108738 9.066955-21.225867 18.175693-33.426562 18.175693-18.217476 3.008391-36.393169-9.108738-54.568863-18.175693-39.40156-27.284431-81.853294-51.560472-121.171288-78.844904-12.117129-9.066955-27.284431-18.175693-42.451734-12.117129-3.008391 0-3.008391 3.050174 0 3.050174l197.049584 227.342406c9.066955 9.066955 18.175693 18.175693 30.292822 18.175693 9.108738 0 15.167303-6.058564 21.225867-12.117129l287.969832-284.961442h3.050174c54.568863 118.246463 112.146116 245.559882 109.137725 376.048824 0 3.050174 0 9.108738-3.050173 12.158912-6.058564 6.058564-15.167303 0-21.225867-6.100348l-69.694382-66.853124a2.966607 2.966607 0 0 0-3.050174 3.050174 299.042381 299.042381 0 0 1-90.920249 188.024412v3.00839c18.175693 3.050174 39.40156 9.108738 54.318163 21.225867s27.284431 36.393169 21.225867 54.568863a2.966607 2.966607 0 0 1-3.00839 3.050174h-618.391399c-6.058564 0-18.175693 3.008391-21.225867-6.058565 0-6.058564 6.058564-15.167303 9.108738-21.225867a80.683364 80.683364 0 0 1 15.125519-18.217476 107.299264 107.299264 0 0 1 39.443344-24.234258s15.125519-3.008391 18.175693-3.00839a2.966607 2.966607 0 0 0 3.00839-3.050174c0-27.284431-21.184084-45.460124-39.40156-66.853124a256.799563 256.799563 0 0 1-45.042292-91.045599c0-18.217476-6.058564-36.393169-18.175693-39.443343h-3.050174a320.560731 320.560731 0 0 1-51.518689 78.844903c-6.058564 6.058564-12.117129 9.066955-18.175693 6.058565a11.114332 11.114332 0 0 1-3.050174-9.108738 533.613281 533.613281 0 0 1 30.334605-239.459535c18.175693-48.510298 42.409951-93.970423 54.318164-142.480721z"
                    fill="#0BB2FF" p-id="3322"></path>
              </svg>
              <span class="label-text text-base-content/30">QQ支付(维护中)</span>
            </div>
            <input type="radio" name="mobile-radio-pay" class="radio" disabled/>
          </label>
        </div>
        <div class="flex flex-row justify-end">
          <button class="btn btn-primary flex-1" onclick="pay_dialog.showModal()">
            <span>确认支付</span>
            <span>￥8.00</span>
          </button>
        </div>
      </div>
    </dialog>

    <div class="flex flex-col divide-y">
      <div class="flex flex-row py-4" v-for="item in menus">
        <div class="flex flex-1 flex-row items-center space-x-2">
          <div class="flex items-center space-x-1 text-lg">
            <div class="font-medium space-x-1">
              <span class="font-bold">{{ item.coin }}</span>
              <span>金币</span>
            </div>
            <div class="text-base-content/30">/</div>
            <div class="text-base-content/50">
              <span>￥</span>
              <span>{{ item.money }}</span>
            </div>
          </div>
          <div v-if="item.origin" class="line-through text-base-content/30">{{ item.origin }}</div>
          <div v-if="item.discount"
               class="text-sm items-center justify-center text-error border rounded px-1">
            {{ item.discount }}
          </div>
        </div>
        <div>
          <button class="btn bg-yellow-400 text-base-100" onclick="my_mobile_pay.showModal()">购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
