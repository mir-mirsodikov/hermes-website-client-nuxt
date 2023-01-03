<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
AuthService.url = useRuntimeConfig().public.authServer;
</script>
