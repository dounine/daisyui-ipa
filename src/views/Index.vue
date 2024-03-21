<script setup>
import Apps from "../components/Apps.vue";
</script>

<template>
  <div>
<!--    <StatView class="mt-4 mx-4"/>-->
    <Apps class="mt-4" icon="icon-app" url="/app/hots" label="热门应用"/>
    <Apps class="mt-4" icon="icon-new" url="/app/news" label="最新提取"/>
  </div>
</template>

<style scoped>
</style>
