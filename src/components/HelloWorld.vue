<script setup lang="ts">
import { ref } from 'vue'
import Avatar from './Avatar.vue'
import Badge from './Badge.vue'
import Button from './Button.vue'

defineProps<{ msg: string }>()

const count = ref(0)

const handleClick = () => {
  console.log('click button')
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="q-pa-md q-gutter-sm">
    <Avatar size="xl" color="primary" text-color="white">J</Avatar>
    <Avatar size="xl" color="primary" text-color="white">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </Avatar>
  </div>

  <div class="q-pa-md q-gutter-sm">
    <Button color="white" text-color="black" label="Standard" @click="handleClick" />
    <Button color="primary" label="Primary" @click="handleClick" />
  </div>

  <div class="q-pa-md q-gutter-sm">
    <Badge color="primary" label="Primary" />
    <Badge outline color="secondary" label="Outline" />
    <Badge color="blue">#4D96F2</Badge>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
