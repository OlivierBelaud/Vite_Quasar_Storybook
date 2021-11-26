<script setup lang="ts">
import { SizeList } from '../../types/Size.types'
import { ColorList } from '../../types/Color.types'

interface AvatarProps {
  size?: SizeList,
  color?: ColorList,
  textColor?: string,
  icon?: string
}
const props = withDefaults(defineProps<AvatarProps>(), {
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
    :icon="icon"
  >
    <slot></slot>
  </q-avatar>
</template>

