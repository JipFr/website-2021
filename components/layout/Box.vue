<template>
  <div class="box">
    <slot />
  </div>
</template>

<style scoped>
.box {
  padding: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: 2px 2px 0px 2px var(--shadow-color, black);
}
.do-hover {
  transition: box-shadow 100ms;
  cursor: pointer;
}
.do-hover:hover {
  box-shadow: 0 0 0 6px var(--shadow-color, black);
}
</style>
