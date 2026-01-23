<template>
  <div class="layout">
    <div class="sidebar">
      <slot name="sidebar" />
    </div>
    <div class="main">
      <slot name="main" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  --clamp: clamp(256px, 20vw, 312px);
}

.sidebar {
  width: var(--clamp);
  height: 100%;
  position: fixed;
  box-shadow: 1px 0 0 0 var(--color-main-4);
}

.main {
  padding-left: var(--clamp);
}
</style>
