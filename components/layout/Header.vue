<template>
  <header>
    <container>
      <h2>Jip Frijlink</h2>
    </container>
  </header>
</template>

<style scoped>
header {
  padding: 50px 0;
  background: var(--off-body);
}
h2 {
  font-size: 2rem;
}
</style>

<script>
import Container from '~/components/layout/Container'

export default {
  components: {
    Container,
  },
}
</script>
