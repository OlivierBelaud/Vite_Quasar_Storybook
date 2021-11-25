<script setup lang="ts">
interface Props {
  size?: string,
  color?: string,
  textColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'primary',
  textColor: 'white'
})
</script>

<template>
  <q-avatar
    :size="size"
    :color="color"
    :text-color="textColor"
  >
    <slot></slot>
  </q-avatar>
</template>

