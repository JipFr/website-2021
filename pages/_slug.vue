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

h1 {
  display: block;
  margin: 20px auto;
  max-width: 37rem;
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
  async asyncData({ $content, params, error }) {
    let projects = await $content('projects').fetch()

    projects = projects.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const currentPost = projects.find((p) => p.slug === params.slug)

    if (!currentPost) {
      error('Page not found')
    }

    return {
      projects,
      currentPost,
    }
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
  mounted() {
    this.setParagraphs()
  },
  methods: {
    setParagraphs() {
      // Add "is-text" class to all paragraphs without an image
      if (this.$el) {
        this.$el.querySelectorAll('p').forEach((p) => {
          if (p.querySelector('img')) {
            p.classList.add('is-img')
          } else {
            p.classList.add('limited-width')
          }
        })
      }
    },
  },
  head() {
    // Title
    const title = this.currentPost?.title
      ? `${this.currentPost.title} — Jip Frijlink`
      : undefined

    // Description
    const description = this.currentPost?.description

    // Meta tags
    const meta = [
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: this.currentPost.color,
      },
    ]

    if (this.currentPost?.color) {
      meta.push({
        hid: 'theme-color',
        name: 'theme-color',
        content: this.currentPost.color,
      })
    }
    if (this.currentPost?.title) {
      meta.push({
        hid: 'og:title',
        name: 'og:title',
        content: title,
      })
    }
    if (description) {
      meta.push({
        hid: 'description',
        name: 'description',
        content: description,
      })
      meta.push({
        hid: 'og:description',
        name: 'og:description',
        content: description,
      })
    }

    return {
      meta,
      title,
    }
  },
}
</script>
