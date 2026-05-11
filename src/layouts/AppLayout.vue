<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useChurchStore } from '@/stores/church'

const churchStore = useChurchStore()
const route = useRoute()

const headerLabel = computed(() => {
  if (route.path.startsWith('/application')) return 'Applications'
  if (route.path.startsWith('/profile')) return 'Profile'
  return ''
})

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
    :label="headerLabel"
  />
  <main :class="route.meta.mainClass">
    <slot />
  </main>
  <AppFooter />
</template>
