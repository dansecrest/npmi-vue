<script setup lang="ts">
import DefaultHeader from '@/components/DefaultHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <DefaultHeader />
  <main class="login">
    <slot />
  </main>
  <AppFooter />
</template>
