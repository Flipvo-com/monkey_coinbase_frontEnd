<template>
  <v-app-bar app>
    <v-toolbar-title>My Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="attemptLogout" color="red">Logout</v-btn>
  </v-app-bar>
</template>
<script setup lang="ts">
import {loginState} from "@/stats/loginState";

const {logout} = loginState(); // Call loginState() to get logout

const attemptLogout = async () => {
  try {
    await logout(); // Call the logout function
  } catch (e) {
    console.error('Logout failed', e);
  }
};
</script>
