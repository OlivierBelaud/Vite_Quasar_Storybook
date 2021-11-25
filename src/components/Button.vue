<script setup lang="ts">
defineProps<{
  color: string,
  textColor?: string,
  label: string
}>()
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

