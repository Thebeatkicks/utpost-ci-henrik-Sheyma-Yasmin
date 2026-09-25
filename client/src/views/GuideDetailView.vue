<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../api.js'

const route = useRoute()
const guide = ref(null)
const error = ref(null)

const load = async (slug) => {
  guide.value = null
  error.value = null
  try {
    guide.value = await get(`/guides/${slug}`)
  } catch (err) {
    error.value = err.message
  }
}

onMounted(() => load(route.params.slug))
watch(
  () => route.params.slug,
  (slug) => slug && load(slug),
)
</script>

<template>
  <p v-if="error" role="alert">{{ error }}</p>
  <p v-else-if="!guide">Laddar…</p>
  <article v-else>
    <h1>{{ guide.title }}</h1>
    <p class="muted">{{ guide.region }} · {{ guide.difficulty }} · {{ guide.length_km }} km</p>
  </article>
</template>
