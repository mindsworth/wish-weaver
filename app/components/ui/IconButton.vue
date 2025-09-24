<template>
  <button
    :aria-label="ariaLabel"
    :class="[
      'inline-flex items-center justify-center rounded-md transition-colors',
      sizeClasses,
      variantClasses,
      disabled ? 'opacity-50 pointer-events-none' : '',
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <Icon :name="icon" :class="iconSizeClasses" />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    icon: string
    ariaLabel: string
    size?: 'sm' | 'md' | 'lg'
    variant?: 'ghost' | 'primary' | 'outline'
    disabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    variant: 'ghost',
    disabled: false,
  })

  defineEmits<{ click: [event: MouseEvent] }>()

  const sizeClasses = computed(
    () =>
      ({
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
      })[props.size]
  )

  const iconSizeClasses = computed(
    () =>
      ({
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      })[props.size]
  )

  const variantClasses = computed(
    () =>
      ({
        ghost: 'text-gray-600 hover:bg-gray-100',
        primary: 'bg-primary text-white hover:bg-primary-hover',
        outline: 'border border-primary text-primary hover:bg-primary/10',
      })[props.variant]
  )
</script>
