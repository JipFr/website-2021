<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
// Import components
import AppHeader from '~/components/layout/Header'

export default {
  components: {
    AppHeader,
  },
}
</script>
