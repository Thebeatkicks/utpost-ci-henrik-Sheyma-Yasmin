<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { bajs } from 'bajs'
</script>

<template>
  <header>
    <RouterLink to="/guider">Utpost</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>
