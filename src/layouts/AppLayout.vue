<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader userName="Marge" :church="{ name: 'North Point Ministries', fileName: 'npm' }" />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>
