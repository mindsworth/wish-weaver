<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  /* Keep widget pages minimal to avoid style/script collisions */
  html,
  body {
    margin: 0;
    padding: 0;
  }
</style>
