<template>
  <NuxtLink
    :to="to"
    :class="linkClasses"
    :active-class="activeClass"
    :exact="exact"
  >
    <Icon v-if="icon" :name="icon" :class="iconClasses" />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">

interface Props {
  to: string
  icon?: string
  variant?: 'default' | 'mobile'
  exact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  exact: false
})

const baseClasses = 'inline-flex items-center transition-colors hover:text-gray-900'

const variantClasses = {
  default: 'text-gray-700 px-3 py-2 rounded-md text-sm font-medium',
  mobile: 'block text-gray-700 hover:text-gray-900 px-3 py-2'
}

const linkClasses = computed(() => [
  baseClasses,
  variantClasses[props.variant]
])

const iconClasses = computed(() => [
  'h-4 w-4',
  props.variant === 'mobile' ? 'mr-2' : 'mr-2'
])

const activeClass = 'text-blue-600 font-semibold'
</script>
