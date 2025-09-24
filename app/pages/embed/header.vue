<template>
  <Header />
</template>

<script setup lang="ts">
  definePageMeta({ layout: false })

  onMounted(() => {
    const post = () => {
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
      window.parent?.postMessage(
        { type: 'ww:height', role: 'header', height: h },
        '*'
      )
    }

    const ro = new ResizeObserver(() => post())
    ro.observe(document.body)
    window.addEventListener('load', post)
    setTimeout(post, 0)
  })
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
</style>
