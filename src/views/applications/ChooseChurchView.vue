<script setup lang="ts">
import { useChurchStore } from '@/stores/church'
import { useRouter } from 'vue-router'
import { churches, type Church } from '@/data/churches'

const churchStore = useChurchStore()
const router = useRouter()

function handleSelectChurch(church: Church) {
  churchStore.selectChurch(church.name, church.fileName, church.color)
  router.push('/application/choose-path')
}
</script>

<template>
  <h1>Choose A Church</h1>

  <div class="options-list churches">
    <div
      v-for="church in churches"
      :key="church.fileName"
      class="option"
      :style="{ '--color-primary': church.color }"
      @click="handleSelectChurch(church)"
    >
      <div class="logo">
        <img :src="`/images/church-icons/${church.fileName}.svg`" :alt="church.name" />
      </div>
      <div class="info">
        <h4>{{ church.name }}<i class="fa fa-angle-right"></i></h4>
        <p>{{ church.location }}</p>
      </div>
    </div>
  </div>
</template>
