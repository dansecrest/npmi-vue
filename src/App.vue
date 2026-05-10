<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import DefaultHeader from '@/components/DefaultHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
const isAuthenticated = computed(() => route.meta.layout === 'app')
</script>

<template>
  <AppHeader v-if="isAuthenticated" userName="Marge" :church="{ name: 'North Point Ministries', fileName: 'npm' }" />
  <DefaultHeader v-else />
  <main :class="isAuthenticated ? '' : 'login'">
    <RouterView />
  </main>
  <AppFooter />
</template>
