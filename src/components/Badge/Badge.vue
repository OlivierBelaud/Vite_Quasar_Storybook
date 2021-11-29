<script setup lang="ts">
import { ColorList } from '@models/colors'

interface BadgeProps {
  outline?: boolean
  color?: ColorList
  label?: string
}
withDefaults(defineProps<BadgeProps>(), {
  outline: false,
  color: 'primary',
  label: undefined,
})
</script>

<template>
  <q-badge :outline="outline" :color="color" :label="label">
    <slot></slot>
  </q-badge>
</template>
