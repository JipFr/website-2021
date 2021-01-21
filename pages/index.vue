<template>
  <app-section>
    <container>
      <h2 class="text-2xl font-bold">Projects</h2>
      <project-list />
    </container>
  </app-section>
</template>

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
