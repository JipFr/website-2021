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
        <div>
          <h1>Tuurlijk ga ik voor deze grap geen hele pagina programmeren</h1>
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

export default {
  components: {
    Container,
    AppSection,
    Hero,
    AboutMe,
  },
}
</script>
