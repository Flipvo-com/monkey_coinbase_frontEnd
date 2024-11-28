<template>
  <v-btn @click="attemptLogout" color="red">Logout</v-btn>
</template>

<script setup lang="ts">
import {loginState} from "@/stats/loginState.js"; // Import the loginState

const {logout} = loginState(); // Call loginState() to get logout

const attemptLogout = async () => {
  try {
    await logout(); // Call the logout function
  } catch (e) {
    console.error('Logout failed', e);
  }
};
</script>
