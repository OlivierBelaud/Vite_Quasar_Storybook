<script setup lang="ts">
import { ColorList } from '../../types/Color.types'

interface ButtonProps {
  color?: ColorList,
  textColor?: string,
  label: string
}
const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  textColor: 'white'
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

