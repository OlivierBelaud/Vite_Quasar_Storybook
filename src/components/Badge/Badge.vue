<script setup lang="ts">
import { ColorList } from '../../types/Color.types'

interface BadgeProps {
  outline?: boolean,
  color?: ColorList,
  label?: string,
}
const props = withDefaults(defineProps<BadgeProps>(), {
  outline: false,
  color: 'primary'
})
</script>

<template>
  <q-badge
    :outline="outline"
    :color="color"
    :label="label"
  >
    <slot></slot>
  </q-badge>
</template>

