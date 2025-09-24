<template>
  <CollapsibleRoot v-model:open="isOpen" :class="rootClasses">
    <CollapsibleTrigger v-if="hasTrigger" as-child>
      <slot name="trigger" />
    </CollapsibleTrigger>
    <CollapsibleContent :class="contentClasses">
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<script setup lang="ts">
  interface Props {
    open?: boolean
    defaultOpen?: boolean
    disabled?: boolean
    class?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    defaultOpen: false,
    disabled: false,
  })

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  const isOpen = computed({
    get: () => props.open ?? internalOpen.value,
    set: value => {
      if (props.open !== undefined) {
        emit('update:open', value)
      } else {
        internalOpen.value = value
      }
    },
  })

  const internalOpen = ref(props.defaultOpen)

  const rootClasses = computed(() => [props.class])

  const contentClasses = computed(() => [
    'overflow-hidden',
    // Smooth easing + duration in addition to built-in keyframes
    'transition-all duration-300 ease-in-out',
    // Fade support for a bit more polish
    'data-[state=closed]:opacity-0 data-[state=open]:opacity-100',
    // Keep the height keyframe animations from Reka UI
    'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
  ])

  const slots = useSlots()
  const hasTrigger = computed(() => !!slots.trigger)
</script>
