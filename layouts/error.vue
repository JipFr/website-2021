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
        <div v-if="content" class="sect">
          <h2>{{ content.title }}: {{ error.message }}</h2>

          <nuxt-content :document="content" />
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

export default {
  components: {
    Container,
    AppSection,
    Hero,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  async fetch() {
    const error = await this.$content('error').fetch()
    this.content = error
  },
  data() {
    return {
      content: null,
    }
  },
}
</script>
