<script setup lang="ts">
interface Props {
  outline?: boolean,
  color?: string,
  label?: string,
}
const props = withDefaults(defineProps<Props>(), {
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

