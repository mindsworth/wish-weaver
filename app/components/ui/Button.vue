<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
    <Icon v-if="icon" :name="icon" :class="iconClasses" />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    icon?: string
    iconPosition?: 'left' | 'right' | 'default'
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false,
    iconPosition: 'left',
    icon: undefined,
  })

  defineEmits<{
    click: [event: MouseEvent]
  }>()

  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  }

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 text-lg',
  }

  const buttonClasses = computed(() => [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
  ])

  const iconClasses = computed(() => {
    const sizeMap = {
      sm: 'h-4 w-4',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    }

    const positionMap = {
      left: 'mr-2',
      right: 'ml-2',
      default: 'm-0',
    }

    return [sizeMap[props.size], positionMap[props.iconPosition]]
  })
</script>
