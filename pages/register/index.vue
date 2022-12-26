<template>
  <div class="m-auto w-1/6 pt-16">
    <h1 class="text-2xl text-white text-center py-4">
      Sign up
    </h1>

    <div class="bg-slate-800 rounded-md p-4">
      <form @submit.prevent="signUp">
        <label
          class="text-slate-300"
          for="email-input"
        >Email</label>
        <input
          id="email-input"
          v-model="email"
          class="input"
          type="email"
        >

        <label
          class="text-slate-300"
          for="username-input"
        >Username</label>
        <input
          id="username-input"
          v-model="username"
          class="input"
          type="text"
        >

        <label
          class="text-slate-300"
          for="name-input"
        >Name</label>
        <input
          id="password-input"
          v-model="name"
          class="input"
          type="text"
        >
        <button class="bg-violet-600 hover:bg-violet-700 w-full mt-4 p-2 text-white rounded-md shadow-lg">
          Sign up
        </button>
      </form>
    </div>
    <div class="rounded-md border mt-4 p-4">
      <p class="text-white text-sm text-center">
        Already have an account? <a
          class="text-sky-300 hover:underline decoration-2 underline-offset-2"
          href="#"
        >Sign in</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

const email = ref<string>('');
const username = ref<string>('');
const name = ref<string>('');

const signUp = async () => {
  console.log('sign up');
  const res = await AuthService.signup({
    email: email.value,
    username: username.value,
    name: name.value
  });

  console.log(res);
};
</script>

<style>
@tailwind components;

@layer components {
  .input {
    @apply w-full text-white p-2 m-auto rounded-md mt-1 mb-3 bg-slate-900 shadow-inner focus:outline;
  }
}
</style>