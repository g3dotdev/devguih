<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gradient-to-br from-neutral-50 to-neutral-200 text-neutral-900;
  @apply dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 dark:text-neutral-200;
}
</style>