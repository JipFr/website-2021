<template>
  <app-section>
    <container class="do-layout">
      <aside>
        <!-- Hero -->
        <div class="sect">
          <hero />
        </div>
      </aside>

      <main>
        <!-- About me -->
        <div class="sect">
          <about-me />
        </div>

        <!-- Projects -->
        <div class="sect">
          <h2>Projects</h2>
          <project-list />
        </div>
      </main>
    </container>
  </app-section>
</template>

<style scoped>
.do-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
}
.sect + .sect {
  margin-top: 50px;
}

h2,
* >>> .section-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  .do-layout {
    grid-template-columns: 100%;
  }
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
