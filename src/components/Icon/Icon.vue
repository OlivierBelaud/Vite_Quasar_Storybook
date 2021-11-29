<script setup lang="ts">
import { IconList } from './Icon.types'
import { SizeList } from '@models/sizes'
import { ColorList } from '@models/colors'

interface IconProps {
  size?: SizeList
  color?: ColorList
  name: IconList
}
withDefaults(defineProps<IconProps>(), {
  color: 'primary',
  size: 'sm',
})
</script>

<template>
  <q-icon :size="size" :color="color" :name="name" />
</template>
