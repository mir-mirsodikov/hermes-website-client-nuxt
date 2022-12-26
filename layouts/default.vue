<template>
  <div
    id="app"
    class="bg-slate-900"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
AuthService.url = useRuntimeConfig().public.authServer;
</script>

<style>
#app {
  height: 100vh
}
</style>