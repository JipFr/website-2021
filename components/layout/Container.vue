<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 40px);
  max-width: 780px;
  margin: 0 auto;
}
</style>
