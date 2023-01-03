<template>
  <button
    class="bg-violet-600 hover:bg-violet-700 w-full mt-4 p-2 text-white rounded-md shadow-lg"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
}>();
</script>