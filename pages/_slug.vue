<template>
  <app-section>
    <container>
      <div v-if="currentPost" ref="div" class="post-content">
        <h1>{{ currentPost.title }}</h1>
        <nuxt-content :document="currentPost" />
        {{ setParagraphs() }}
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

  h1 {
    text-align: center;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  a {
    color: var(--anchor);
    text-decoration: none;
  }
  p.is-text {
    display: block;
    margin: 20px auto;
    max-width: 37rem;
  }
  img {
    width: 100%;
    border-radius: 6px;
    display: block;
    border: 1px solid var(--border);
    background: var(--border);
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
  watch: {
    currentPost() {
      this.$nextTick(() => {
        this.setParagraphs()
      })
    },
  },
  methods: {
    setParagraphs() {
      // Add "is-text" class to all paragraphs without an image
      if (this.$el) {
        this.$el.querySelectorAll('p').forEach((p) => {
          if (!p.querySelector('img')) {
            p.classList.add('is-text')
          }
        })
      }
    },
  },
}
</script>
