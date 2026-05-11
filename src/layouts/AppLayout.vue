<script setup lang="ts">
import { watch } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useChurchStore } from '@/stores/church'

const churchStore = useChurchStore()

watch(
  () => churchStore.color,
  (newColor) => {
    document.documentElement.style.setProperty('--color-primary', newColor)
  },
  { immediate: true },
)
</script>

<template>
  <AppHeader
    userName="Marge"
    :church="{ name: churchStore.name, fileName: churchStore.fileName }"
  />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>
