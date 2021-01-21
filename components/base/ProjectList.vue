<template>
  <div class="list">
    <nuxt-link
      v-for="project in projects"
      :key="project.slug"
      :to="project.slug"
    >
      <box
        class="do-hover"
        :style="`--shadow-color: ${project.color || 'inherit'}`"
      >
        <h3 class="project-title">{{ project.title }}</h3>
        <p>{{ project.date }}</p>
        <p>{{ project.description }}</p>
      </box>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
a {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;

  > * {
    height: 100%;
  }
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;

  .box {
    margin: 5px 0;
  }
}
p {
  margin-top: 10px;
  line-height: 1.5rem;
}
.project-title {
  font-size: 1.25rem;
}
</style>

<script>
// Import components
import Box from '~/components/layout/Box'

export default {
  components: {
    Box,
  },
  async fetch() {
    let projects = await this.$content('projects').fetch()

    projects = projects.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    this.projects = projects
  },
  data() {
    return {
      projects: [],
    }
  },
}
</script>
