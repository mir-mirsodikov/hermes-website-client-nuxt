<template>
  <div class="m-auto w-1/6 pt-16">
    <h1 class="text-2xl text-white text-center py-4">
      Verify account
    </h1>
    <FormContainer>
      <h3 class="text-slate-300 text-center mb-4">
        Please enter the 6 digit code that was emailed to you.
      </h3>
      <form>
        <input
          type="text"
          placeholder="Code"
          class="form-input"
          pattern="[0-9]{6}"
        >
        <button class="bg-violet-600 hover:bg-violet-700 w-full mt-4 p-2 text-white rounded-md shadow-lg">
          Verify
        </button>
      </form>
    </FormContainer>
  </div>
</template>

<script setup lang="ts">

</script>
