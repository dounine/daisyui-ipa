<script setup>
</script>

<template>
  <div class="mx-4 stats shadow flex flex-col stats-vertical sm:stats-horizontal sm:flex-row">
    <div class="stat">
      <div class="stat-figure text-neutral-content">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </div>
      <div class="stat-title">Dump Apps</div>
      <div class="stat-value">22456</div>
      <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-neutral-content">
        <i class="icon icon-download text-2xl"></i>
      </div>
      <div class="stat-title">Downloads</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-neutral-content">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      </div>
      <div class="stat-title">Storage Size</div>
      <div class="stat-value">4018MB</div>
      <div class="stat-desc">↗︎ 90 (14%)</div>
    </div>
  </div>
</template>

<style scoped>
</style>
