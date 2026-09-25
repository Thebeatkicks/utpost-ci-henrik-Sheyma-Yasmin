<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/guider">Utpost</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>
