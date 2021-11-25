<script setup lang="ts">
import { matMenu } from '@quasar/extras/material-icons'
defineProps<{ 
  size: string,
  name: string,
}>()
</script>

<template>
  <!-- <q-icon
    :size="size"
    name="svguse:icons.svg#icon-1"
  /> -->
  <svg style="font-size: 46px;">
    <use xlink:href="icons.svg#icon-1"></use>
  </svg>
</template>

