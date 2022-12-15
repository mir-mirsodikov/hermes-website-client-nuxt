<template>
  <div class="m-auto w-1/6 pt-16">
    <h1 class="text-2xl text-white text-center py-4">
      Sign in to Hermes
    </h1>

    <div
      v-if="error"
      class="bg-red-700/50 rounded-md p-4 mb-4 flex flex-row justify-between border border-red-600"
    >
      <p class="text-white">
        Incorrect username or password.
      </p>
      <a
        href="#"
        @click="closeError"
      >
        <Icon
          name="ion:close-outline"
          class="text-red-400"
          size="1.5rem"
        />
      </a>
    </div>

    <div class="bg-slate-800 rounded-md p-4">
      <form @submit.prevent="signIn">
        <label
          class="text-slate-300"
          for="email-input"
        >Email</label>
        <input
          id="email-input"
          v-model="email"
          class="w-full text-white p-2 m-auto rounded-md mt-1 bg-slate-900 shadow-inner focus:outline"
          type="email"
        >
        <button class="bg-blue-600 hover:bg-blue-700 w-full mt-4 p-2 text-white rounded-md shadow-lg">
          Sign in
        </button>
      </form>
    </div>

    <div class="rounded-md border mt-4 p-4">
      <p class="text-white text-sm text-center">
        Don't have an account? <a
          class="text-sky-300 hover:underline decoration-2 underline-offset-2"
          href="#"
        >Get started</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref<string>('');
const error = ref<boolean>(false);

const signIn = () => {
  if (email.value === '') {
    error.value = true;
    return;
  }
  console.log('Sign in');
};

const closeError = () => {
  error.value = false;
};
</script>