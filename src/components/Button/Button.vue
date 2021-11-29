<script setup lang="ts">
import { ColorList } from '@models/colors'

interface ButtonProps {
  color?: ColorList
  textColor?: string
  label: string
}
withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  textColor: 'white',
})
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <q-btn
    :color="color"
    :text-color="textColor"
    :label="label"
    @click="$emit('click')"
  />
</template>
