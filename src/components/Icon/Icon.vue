<script setup lang="ts">
import { IconList } from './Icon.types'
import { SizeList } from '../../types/Size.types'
import { ColorList } from '../../types/Color.types'

interface IconProps {
  size?: SizeList,
  color?: ColorList,
  name: IconList,
}
const props = withDefaults(defineProps<IconProps>(), {
  color: 'primary',
  size: 'sm',
})
</script>

<template>
  <q-icon
    :size="size"
    :color="color"
    :name="name"
  />
</template>

