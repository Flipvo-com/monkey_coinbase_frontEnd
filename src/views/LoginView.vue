<template>
  <v-app class="!_bg-transparent">
    <div class="_flex _justify-center _items-center _h-screen _flex-col _gap-4">
      <!-- Adjust container to be scrollable if needed -->
      <v-form @submit.prevent="attemptLogin">
        <div class="_flex _justify-center _items-center mb-2">
          <router-link :to="{name:'home'}">
            <v-icon size="100" color="primary">fa-duotone fa-solid fa-monkey</v-icon>
          </router-link>
        </div>
        <v-card class="_w-96" :loading="loginLoading">
          <v-card-title class="_text-center">Login</v-card-title>
          <v-card-text>
            <div class="_py-2">
              <v-alert v-if="loginError" type="error" variant="tonal" density="comfortable">
                {{ loginError }}
              </v-alert>
            </div>
            <v-text-field
                label="Email"
                v-model="email"
                density="comfortable"
                autofocus
                variant="solo"
                :disabled="loginLoading"
            ></v-text-field>
            <v-text-field
                label="Password"
                v-model="password"
                type="password"
                density="comfortable"
                variant="solo"
                :disabled="loginLoading"
            ></v-text-field>
            <div>
              <p class="text-center">
                <router-link class="_text-blue-400" :to="{ name: 'register' }">Create an account</router-link>
              </p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" icon="fa-thin fa-home" :to="{ name: 'home' }"></v-btn>
            <v-spacer/>
            <v-btn
                color="primary"
                type="submit"
                variant="flat"
                @click="attemptLogin"
                :loading="loginLoading"
                :disabled="loginLoading"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
    <MyParticles/>
  </v-app>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loginState} from "@/stats/loginState.js";
import MyParticles from "@/components/common/MyParticles.vue";

const email = ref("");
const password = ref("");
const loginLoading = ref(false);
const {login, loginError} = loginState();

const attemptLogin = async () => {
  loginLoading.value = true;

  try {
    await login({
      email: email.value,
      password: password.value,
    });
    // Once login is successful, loginState's user data will be updated
  } catch (e) {
    console.log("error", e);
  } finally {
    loginLoading.value = false; // Ensure loading state is reset regardless of outcome
  }
};
</script>
