<script setup lang="ts">
import { useRoute } from 'vue-router'
import DefaultHeader from '@/components/DefaultHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
</script>

<template>
  <DefaultHeader />
  <main :class="route.meta.mainClass">
    <slot />
  </main>
  <AppFooter />
</template>
