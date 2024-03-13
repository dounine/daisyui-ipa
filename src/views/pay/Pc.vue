<script setup>
import {ref} from 'vue'

</script>

<template>
  <div>
    <dialog id="my_pay" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click on ✕ button to close</p>
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
