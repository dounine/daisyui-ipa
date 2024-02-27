<template>
  <div class="flex items-center min-h-[80vh] px-4 py-12 mx-auto">
    <div class="flex flex-col items-center max-w-sm mx-auto text-center">
      <h1 class="mt-3 text-2xl font-semibold md:text-2xl">404 找不到对应的页面</h1>
      <p class="mt-4 text-accent">对不起，您访问的这个页面不存在，或者被删除了。</p>

      <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <a href="javascript:history.back()" class="btn w-1/2">
          <i class="icon icon-back"></i>
          返回
        </a>
        <a href="/" class="btn btn-primary w-1/2 normal-case">
          <i class="icon icon-home"></i>
          主页
        </a>
      </div>
    </div>
  </div>
</template>
