<script setup lang="ts">
const props = defineProps<{
  userName: string
  church: {
    name: string
    fileName: string
  }
  label?: string
}>()
</script>

<template>
  <header class="header">
    <div class="site-header">
      <RouterLink to="/" class="logo">
        <img
          :src="`/images/church-icons/${props.church.fileName}.svg`"
          :alt="`${church.name}`"
          class="church-icon"
        />
        <img
          :src="`/images/church-logos/${props.church.fileName}.svg`"
          :alt="`${church.name}`"
          class="church-logo"
        />
        <span v-if="label">{{ label }}</span>
      </RouterLink>

      <div class="greeting">
        <p>
          Welcome, <strong>{{ userName }}</strong>
        </p>
        <i class="fa fa-caret-down"></i>
        <div class="menu">
          <RouterLink to="/my-applications">My Applications</RouterLink>
          <RouterLink to="/profile">My Profile</RouterLink>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>
