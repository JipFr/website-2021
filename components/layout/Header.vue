<template>
  <header>
    <container>
      <div class="name-wrapper">
        <nuxt-link to="/"><h2>Jip Frijlink</h2></nuxt-link>
      </div>
      <div class="links">
        <nuxt-link to="/#about">About</nuxt-link>
        <nuxt-link to="/#testimonials">Testimonials</nuxt-link>
        <nuxt-link to="/#projects">Projects</nuxt-link>
      </div>
    </container>
  </header>
</template>

<style scoped>
header {
  padding: 10px 0;
  background: var(--theme);
  color: white;
}
a {
  color: inherit;
  text-decoration: none;
}
.name-wrapper {
  display: inline-block;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links > * + * {
  margin-left: 20px;
}
</style>

<script>
import Container from '~/components/layout/Container'

export default {
  components: {
    Container,
  },
}
</script>

<!--<template>
  <header>
    <container>
      <div class="name-wrapper">
        <h1>Jip Frijlink</h1>
      </div>
    </container>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin-top: 50px;
}
</style>-->
