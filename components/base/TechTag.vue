<template>
  <span class="tech-tag" :data-tech="tech">{{ tech }}</span>
</template>

<style lang="scss" scoped>
.tech-tag {
  padding: 3px 8px;
  margin-right: 10px;
  border-radius: 4px;
  background: var(--body);

  &[data-tech='Web'] {
    color: #009688;
    background: rgba(0, 150, 135, 0.15);
  }

  &[data-tech='Vue'],
  &[data-tech='Nuxt'] {
    color: #42b983;
    background: rgba(66, 185, 131, 0.15);
  }

  &[data-tech='Node.js'] {
    color: #026e00;
    background: rgba(2, 110, 0, 0.15);
  }

  &[data-tech='SCSS'] {
    color: #bf4080;
    background: rgba(191, 64, 127, 0.1);
  }

  &[data-tech='TypeScript'] {
    color: #2f74c0;
    background: rgba(47, 117, 192, 0.15);
  }

  &[data-tech='PHP'] {
    color: #7377ad;
    background: rgba(115, 119, 173, 0.15);
  }

  &[data-tech='Sanity'] {
    color: #f03e2f;
    background: rgba(240, 63, 47, 0.1);
  }
}
</style>

<script>
export default {
  props: {
    tech: {
      type: String,
      required: true,
    },
  },
}
</script>
