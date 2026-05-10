<script setup lang="ts">
const churches = [
  { name: 'Browns Bridge Church', fileName: 'browns-bridge', location: 'Cumming, GA' },
  { name: 'Buckhead Church', fileName: 'buckhead', location: 'Atlanta, GA' },
  { name: 'Decatur City Church', fileName: 'decatur-city', location: 'Atlanta, GA' },
  { name: 'East Cobb Church', fileName: 'east-cobb', location: 'Marietta, GA' },
  { name: 'Gwinnett Church', fileName: 'gwinnett', location: 'Sugar Hill, GA' },
  { name: 'Hamilton Mill Church', fileName: 'hamilton-mill', location: 'Buford, GA' },
  { name: 'North Point Community Church', fileName: 'north-point', location: 'Alpharetta, GA' },
  { name: 'Woodstock City Church', fileName: 'woodstock-city', location: 'Woodstock, GA' },
]
</script>

<template>
  <h1>Choose A Church</h1>

  <div class="options-list churches">
    <RouterLink v-for="church in churches" :key="church.fileName" to="/application/choose-path" class="option">
      <div class="logo">
        <img :src="`/images/church-icons/${church.fileName}.svg`" :alt="church.name">
      </div>
      <div class="info">
        <h4>{{ church.name }}<i class="fa fa-angle-right"></i></h4>
        <p>{{ church.location }}</p>
      </div>
    </RouterLink>
  </div>
</template>
