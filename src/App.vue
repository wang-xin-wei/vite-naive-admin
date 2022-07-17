<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="darkTheme"
  >
    <router-view />
  </n-config-provider>
</template>

<style></style>
