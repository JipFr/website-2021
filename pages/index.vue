<template>
  <app-section>
    <container>
      <h2>Projects</h2>
      <project-list />
    </container>
  </app-section>
</template>

<style scoped>
h2 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}
</style>

<script>
// Import components
import Container from '~/components/layout/Container'
import AppSection from '~/components/layout/Section'
import ProjectList from '~/components/base/ProjectList'

export default {
  components: {
    Container,
    AppSection,
    ProjectList,
  },
}
</script>
