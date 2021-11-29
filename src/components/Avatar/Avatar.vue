<script setup lang="ts">
import { SizeList } from '@models/sizes'
import { ColorList } from '@models/colors'

interface AvatarProps {
  size?: SizeList
  color?: ColorList
  textColor?: string
  icon?: string
}
withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  color: 'primary',
  textColor: 'white',
  icon: undefined,
})
// const item = "J"
// console.log('$slots')
</script>

<template>
  <q-avatar :size="size" :color="color" :text-color="textColor" :icon="icon">
    <slot>Submit</slot>
  </q-avatar>
</template>
