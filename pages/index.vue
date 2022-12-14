<template>
  <h1>Hello, World!</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolorem? Omnis quis, ex nam sed, minima nisi
    tempora incidunt quod earum excepturi veniam, aliquam voluptas reiciendis et quibusdam magnam repellendus.
  </p>
  <p>{{ num }}</p>
  <button
    class="bg-violet-500 p-3 text-center text-white"
    @click="add"
  >
    Add
  </button>
  <p>{{ msg }}</p>
</template>

<script setup lang="ts">
const msg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const num = ref(3);

const add = () => {
  num.value++;
};
</script>