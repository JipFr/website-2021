<template>
  <div class="hero">
    <img class="jip" src="/jip-body.png" alt="Jip with a cat on his shoulder" />
    <img
      class="head"
      src="/jip-head.png"
      alt="Jip with a cat on his shoulder"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;

  .jip {
    width: 270px;
    border-radius: 10px;
    display: block;
  }

  .head {
    width: 110px;
    position: absolute;
    bottom: 41%;
    left: 9%;
    transform: scale(1);
    transition: bottom 200ms, transform 200ms;
  }

  .head:hover {
    // bottom: 50%;
    // transform: scale(2);
    animation: spin 1s linear infinite;
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
    transition: height 200ms;
  }

  // &:hover::before {
  //   height: 100%;
  // }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
