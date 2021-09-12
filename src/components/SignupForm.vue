<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <div v-if="isSignedup" class="success">
      You signed up! Wait for a redirect!
    </div>
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup.js";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const isSignedup = ref(false);

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        isSignedup.value = true;
        setTimeout(() => {
          context.emit("signup");
        }, 2000);
      }
    };
    return { displayName, email, password, error, isSignedup, handleSubmit };
  },
};
</script>

<style>
</style>