<template>
  <app-section>
    <container class="apply-layout">
      <div v-if="currentPost" class="post-content">
        <h1>{{ currentPost.title }}</h1>
        <nuxt-content :document="currentPost" />
      </div>
    </container>
  </app-section>
</template>

<style lang="scss">
// Layout
.apply-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
}

// Post content
.post-content {
  width: 100%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  p {
    display: block;
    margin: 20px 0;
  }
  img {
    width: 100%;
    border-radius: 6px;
    display: block;
    border: 1px solid var(--border);
  }
  img + img {
    margin-top: 20px;
  }
}
</style>

<script>
// Import components
import Container from '~/components/layout/Container'
import AppSection from '~/components/layout/Section'

export default {
  components: {
    Container,
    AppSection,
  },
  async fetch() {
    let projects = await this.$content('projects').fetch()

    projects = projects.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    this.projects = projects
    this.currentPost = projects.find((p) => p.slug === this.$route.params.slug)
  },
  data() {
    return {
      projects: [],
      currentPost: null,
    }
  },
}
</script>
