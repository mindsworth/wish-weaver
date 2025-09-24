<script lang="ts" setup>
  // Page metadata
  useHead({
    title: 'WishWeaver - Make Every Occasion Special with Group Cards',
    meta: [
      {
        name: 'description',
        content:
          'Create meaningful group cards with contributions from multiple people. Perfect for birthdays, anniversaries, and special occasions.',
      },
    ],
  })
</script>
<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-10">
        <PageTitle class="!opacity-100">
          Make Every
          <span class="text-primary">Thank You</span>
          special with a Group Card
        </PageTitle>
        <p class="text-3xl text-primary mb-8 max-w-7xl mx-auto">
          For yourself or someone special with messages from multiple
          contributors
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UiButton variant="primary" size="lg"> Weave a Group Card </UiButton>
          <UiButton variant="outline" size="lg"> View a Sample Card </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
