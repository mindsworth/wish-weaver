<template>
  <DropdownMenuItem :class="itemClasses" @click="$emit('click', $event)">
    <Icon v-if="icon" :name="icon" class="mr-2 h-4 w-4" />
    <slot />
  </DropdownMenuItem>
</template>

<script setup lang="ts">

interface Props {
  icon?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const itemClasses = computed(() => [
  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
  'focus:bg-gray-100 focus:text-gray-900',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  props.disabled ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-100'
])
</script>
