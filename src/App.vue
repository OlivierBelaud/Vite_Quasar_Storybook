<script setup lang="ts">
import Avatar from './components/Avatar/Avatar.vue'
import Badge from './components/Badge/Badge.vue'
import Button from './components/Button/Button.vue'
const handleClick = () => {
  console.log('click button')
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="q-pa-md q-gutter-sm">
    <Avatar size="xl" color="primary" text-color="white">J</Avatar>
    <Avatar size="xl" color="primary" text-color="white">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </Avatar>
    <Avatar size="xl" color="red" text-color="white" icon="directions" />
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
