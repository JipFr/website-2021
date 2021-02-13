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
        <div class="box-inner">
          <div class="core">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="date">{{ project.date }}</p>
            <p class="description">{{ project.description }}</p>
          </div>
          <aside>
            <div class="icon-wrapper">
              <img
                src="https://raw.githubusercontent.com/JipFr/Adolla/master/public/icon.png"
                alt
              />
            </div>
          </aside>
        </div>
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

.project-title {
  font-size: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    margin-top: -2px;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: var(--shadow-color);
  }
}
p.date,
p.description {
  color: var(--text-secondary);
}
p.description {
  margin-top: 10px;
  line-height: 1.5rem;
}

.box-inner {
  display: grid;
  grid-template-columns: 1fr 100px;

  .icon-wrapper {
    padding: 10px;
    background: var(--shadow-color);
    height: 100%;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-wrapper img {
    width: 50%;
  }
}

[href='/adolla'] .icon-wrapper img {
  filter: saturate(0) brightness(1.5);
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
