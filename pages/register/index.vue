<template>
  <div class="m-auto w-1/6 pt-16">
    <h1 class="text-2xl text-white text-center py-4">
      Sign up
    </h1>

    <FormContainer>
      <form @submit.prevent="signUp">
        <label
          class="text-slate-300"
          for="email-input"
        >Email</label>
        <input
          id="email-input"
          v-model="email"
          class="form-input"
          type="email"
        >
        <label
          class="text-slate-300"
          for="username-input"
        >Username</label>
        <input
          id="username-input"
          v-model="username"
          class="form-input"
          type="text"
        >
        <label
          class="text-slate-300"
          for="name-input"
        >Name</label>
        <input
          id="password-input"
          v-model="name"
          class="form-input"
          type="text"
        >
        <FormButton
          title="Sign up"
          @click="signUp"
        />
      </form>
    </FormContainer>
    <FormFooter
      info="Already have an account?"
      action="Sign in"
      location="/login"
    />
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
