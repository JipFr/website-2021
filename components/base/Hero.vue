<template>
  <div class="hero">
    <img
      class="jip"
      src="/jip-transparent.png"
      alt="Jip with a cat on his shoulder"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  overflow: hidden;

  .jip {
    width: 90%;
    max-width: 500px;
    border-radius: 10px;
    display: block;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: var(--theme);
    border-radius: 10px;
    z-index: -1;
  }
}
</style>
