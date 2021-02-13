<template>
  <app-section>
    <container>
      <!-- Hero -->
      <app-section>
        <hero />
      </app-section>

      <!-- About me -->
      <app-section>
        <h2>About me</h2>
        <about-me />
      </app-section>

      <!-- Projects -->
      <app-section>
        <h2>Projects</h2>
        <project-list />
      </app-section>
    </container>
  </app-section>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
</style>

<script>
// Import components
import Container from '~/components/layout/Container'
import AppSection from '~/components/layout/Section'
import Hero from '~/components/base/Hero'
import AboutMe from '~/components/base/AboutMe'
import ProjectList from '~/components/base/ProjectList'

export default {
  components: {
    Container,
    AppSection,
    Hero,
    AboutMe,
    ProjectList,
  },
}
</script>
