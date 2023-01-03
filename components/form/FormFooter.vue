<template>
  <div class="rounded-md border mt-4 p-4">
    <p class="text-white text-sm text-center">
      {{ info }} <NuxtLink
        class="text-sky-300 hover:underline decoration-2 underline-offset-2"
        :to="location"
      >
        {{ action }}
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info: string,
  action: string,
  location: string,
}>();
</script>