<template>
  <DropdownMenuRoot class="relative">
    <DropdownMenuTrigger as-child>
      <slot name="trigger" />
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="contentClasses">
      <slot />
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
  interface Props {
    align?: 'start' | 'center' | 'end'
    side?: 'top' | 'right' | 'bottom' | 'left'
    sideOffset?: number
    alignOffset?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    align: 'start',
    side: 'bottom',
    sideOffset: 4,
    alignOffset: 0,
  })

  const contentClasses = computed(() => [
    'min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-950 shadow-md',
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ])
</script>
