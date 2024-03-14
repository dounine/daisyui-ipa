<script setup>
import {ref} from 'vue'

</script>

<template>
  <div>
    <dialog id="my_pay" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
            <input type="radio" name="radio-pay" class="radio" checked/>
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
            <input type="radio" name="radio-pay" class="radio" disabled/>
          </label>
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" >
                <path
                    d="M173.871355 444.23901v-3.050173c12.158912-51.560472 9.108738-105.878635 21.225867-160.656415 18.384609-109.095942 90.962032-209.124929 193.87406-254.41792s227.342406-30.292822 312.245873 39.40156c72.744556 60.627427 112.146116 157.648024 121.171288 251.618446a83.566405 83.566405 0 0 1-3.050174 27.284431c-3.008391 9.108738-12.117129 15.167303-18.175693 21.225867l-260.685401 209.166713c-9.108738 9.066955-21.225867 18.175693-33.426562 18.175693-18.217476 3.008391-36.393169-9.108738-54.568863-18.175693-39.40156-27.284431-81.853294-51.560472-121.171288-78.844904-12.117129-9.066955-27.284431-18.175693-42.451734-12.117129-3.008391 0-3.008391 3.050174 0 3.050174l197.049584 227.342406c9.066955 9.066955 18.175693 18.175693 30.292822 18.175693 9.108738 0 15.167303-6.058564 21.225867-12.117129l287.969832-284.961442h3.050174c54.568863 118.246463 112.146116 245.559882 109.137725 376.048824 0 3.050174 0 9.108738-3.050173 12.158912-6.058564 6.058564-15.167303 0-21.225867-6.100348l-69.694382-66.853124a2.966607 2.966607 0 0 0-3.050174 3.050174 299.042381 299.042381 0 0 1-90.920249 188.024412v3.00839c18.175693 3.050174 39.40156 9.108738 54.318163 21.225867s27.284431 36.393169 21.225867 54.568863a2.966607 2.966607 0 0 1-3.00839 3.050174h-618.391399c-6.058564 0-18.175693 3.008391-21.225867-6.058565 0-6.058564 6.058564-15.167303 9.108738-21.225867a80.683364 80.683364 0 0 1 15.125519-18.217476 107.299264 107.299264 0 0 1 39.443344-24.234258s15.125519-3.008391 18.175693-3.00839a2.966607 2.966607 0 0 0 3.00839-3.050174c0-27.284431-21.184084-45.460124-39.40156-66.853124a256.799563 256.799563 0 0 1-45.042292-91.045599c0-18.217476-6.058564-36.393169-18.175693-39.443343h-3.050174a320.560731 320.560731 0 0 1-51.518689 78.844903c-6.058564 6.058564-12.117129 9.066955-18.175693 6.058565a11.114332 11.114332 0 0 1-3.050174-9.108738 533.613281 533.613281 0 0 1 30.334605-239.459535c18.175693-48.510298 42.409951-93.970423 54.318164-142.480721z"
                    fill="#0BB2FF" p-id="3322"></path>
              </svg>
              <span class="label-text text-base-content/30">QQ支付(维护中)</span>
            </div>
            <input type="radio" name="radio-pay" class="radio" disabled/>
          </label>
        </div>
        <div class="flex flex-row justify-end">
          <button class="btn btn-primary">
            确认支付
          </button>
        </div>
      </div>
    </dialog>
    <div class="flex flex-wrap">
      <div class="pay-item">
        <div class="pay-shadow">
          <div class="flex justify-center">
            <svg class="w-14 h-14 pay-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                  d="M160 112v48H288V112c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 96H48V416c0 26.5 21.5 48 48 48H352c26.5 0 48-21.5 48-48V208H336v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H160v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208zm0-48V112C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48V416c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48h64z"/>
            </svg>
          </div>
          <div class="pay-label">
            普通充值
          </div>
          <div class="flex items-center space-x-2 justify-center mt-3">
            <div class="text-xs text-accent">原价</div>
            <div class="rounded-full bg-sky-100 text-xs py-1 px-2 text-primary font-bold">折扣 0%</div>
          </div>
          <div class="pay-info">
            <div class="flex items-center">
              <span class="pay-coin">8.00</span>
            </div>
            <div class="pay-info-split">/</div>
            <div class="pay-info-money">
              ￥8.00
            </div>
          </div>
          <div class="px-4">
            <div class="flex flex-row items-center space-x-2 text-base-content/40 mt-4">
              <i class="icon icon-check"></i>
              <span>购买获得8.00金币</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币可转赠他人</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币永不清零</span>
            </div>
          </div>
          <div class="flex mt-4">
            <button class="pay-btn btn btn-primary flex flex-1" onclick="my_pay.showModal()">立即购买</button>
          </div>
        </div>
      </div>
      <div
          class="pay-item">
        <div class="pay-shadow border border-info relative">
          <div class="flex justify-center">
            <svg class="w-14 h-14 pay-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                  d="M176 96c0-26.5 21.5-48 48-48s48 21.5 48 48v64H176V96zm-48 64H48 0v48V432v48H48 160V432H48V208H400v16h48V208 160H400 320V96c0-53-43-96-96-96s-96 43-96 96v64zm448 96H192V512H576V256zM320 336v16c0 35.3 28.7 64 64 64s64-28.7 64-64V336 320h32v16 16c0 53-43 96-96 96s-96-43-96-96V336 320h32v16z"/>
            </svg>
          </div>
          <div class="pay-label">
            豪华充值
          </div>
          <div class="flex items-center space-x-2 justify-center mt-3">
            <div class="text-xs text-accent line-through">32.00</div>
            <div class="rounded-full bg-yellow-100 text-xs py-1 px-2 text-green-600 font-bold">折扣 93%</div>
          </div>
          <div class="pay-info">
            <div class="flex items-center">
              <span class="pay-coin">32.00</span>
            </div>
            <div class="pay-info-split">/</div>
            <div class="pay-info-money">
              ￥30.00
            </div>
          </div>
          <div class="pay-fire">
            <i class="icon icon-fire text-xl"></i>
          </div>
          <div class="px-4">
            <div class="flex flex-row items-center space-x-2 text-base-content/40 mt-4">
              <i class="icon icon-check"></i>
              <span>购买获得32.00金币</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币可转赠他人</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币永不清零</span>
            </div>
          </div>
          <div class="flex mt-4">
            <button class="pay-btn btn flex flex-1 bg-[#F19D38] text-base-100">立即购买</button>
          </div>
        </div>
      </div>
      <div class="pay-item">
        <div class="pay-shadow">
          <div class="flex justify-center">
            <svg class="w-14 h-14 pay-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                  d="M64 24C64 10.7 74.7 0 88 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H234.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H263.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H88C74.7 48 64 37.3 64 24zM225.6 240H523.2c10.9 0 20.4-7.3 23.2-17.8L584.7 80H195.1l30.5 160zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM24 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
            </svg>
          </div>
          <div class="pay-label">
            至尊充值
          </div>
          <div class="flex items-center space-x-2 justify-center mt-3">
            <div class="text-xs text-accent line-through">75.00</div>
            <div class="rounded-full bg-sky-100 text-xs py-1 px-2 text-primary font-bold">折扣 90%</div>
          </div>
          <div class="pay-info">
            <div class="flex items-center">
              <span class="pay-coin">75.00</span>
            </div>
            <div class="pay-info-split">/</div>
            <div class="pay-info-money">
              ￥68.00
            </div>
          </div>
          <div class="px-4">
            <div class="flex flex-row items-center space-x-2 text-base-content/40 mt-4">
              <i class="icon icon-check"></i>
              <span>购买获得75.00金币</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币可转赠他人</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币永不清零</span>
            </div>
          </div>
          <div class="flex mt-4">
            <button class="pay-btn btn btn-primary flex flex-1" onclick="my_pay.showModal()">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pay-item {
  @apply mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300;
  div.pay-info-split {
    @apply text-base-content/20;
  }

  div.pay-info-money {
    @apply flex items-end text-base-content/70 text-sm;
  }

  svg.pay-img {
    @apply fill-base-content/50;
  }

  span.pay-coin {
    @apply flex items-center;
  }

  div.pay-fire {
    @apply absolute right-4 top-4 text-[#F19D38];
  }

  &:hover {
    @apply scale-110 sm:-translate-y-px sm:translate-x-px;
    .pay-btn {
      @apply bg-base-100 text-primary;
    }

    div.pay-shadow {
      @apply bg-primary;
    }

    svg.pay-img {
      @apply fill-info;
    }

    span.pay-coin, div.pay-label, div.pay-info-money {
      @apply text-info;
    }
  }

  div.pay-shadow {
    @apply transition-all duration-300 ease-in-out cursor-pointer dark-bg opacity-95 shadow-md rounded-2xl px-4 py-10;
    div.pay-label {
      @apply flex justify-center mt-4 text-sm font-medium;
    }

    div.pay-info {
      @apply font-bold font-mono flex justify-center text-2xl mt-2;
    }

  }

}
</style>
