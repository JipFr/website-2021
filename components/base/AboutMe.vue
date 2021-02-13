<template>
  <div>
    <h2 class="section-title">{{ about.title }}</h2>
    <nuxt-content :document="about" />
  </div>
</template>

<style lang="scss" scoped>
p {
  color: var(--text-secondary);
}
</style>

<script>
export default {
  async fetch() {
    const about = await this.$content('about').fetch()
    this.about = about
  },
  data() {
    return {
      about: {},
    }
  },
}
</script>
