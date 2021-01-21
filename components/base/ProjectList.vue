<template>
  <div class="list">
    <box
      v-for="project in projects"
      :key="project.slug"
      class="do-hover"
      :style="`--shadow-color: ${project.color || 'inherit'}`"
    >
      <h3 class="project-title">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </box>
  </div>
</template>

<style lang="scss" scoped>
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
    this.projects = await this.$content('projects').fetch()
  },
  data() {
    return {
      projects: [],
    }
  },
}
</script>
