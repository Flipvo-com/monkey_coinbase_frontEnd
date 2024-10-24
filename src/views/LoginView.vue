<template>
    <v-app class="!_bg-transparent">
        <v-main >
            <div class="_flex _justify-center _items-center _h-screen _flex-col _gap-4">
               <router-link :to="{name:'home'}">
                   <v-icon size="100" color="primary">fa-duotone fa-solid fa-monkey</v-icon>
               </router-link>

                <v-card class="_w-96" :loading="loginLoading">
                    <v-card-title class="_text-center">Login</v-card-title>
                    <v-card-text>

                        <div class="_py-2">
                            <v-alert v-if="loginError" type="error" variant="tonal" density="comfortable">
                                {{ loginError }}
                            </v-alert>
                        </div>

                        <v-text-field label="Email" v-model="email"
                                      density="comfortable" variant="solo"></v-text-field>
                        <v-text-field label="Password" v-model="password" type="password"
                                      density="comfortable" variant="solo"></v-text-field>

                        <div>
                            <p>
                                if you don't have an account, please
                                <router-link class="_text-blue-400"
                                    :to="{name:'register'}">register</router-link>
                            </p>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary"
                               @click="attemptLogin">Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-main>
            <vue-particles class="_absolute _z-[-10]"
                id="particlesLoginPage" :options="particlesConfig" />
    </v-app>
</template>
<script setup lang="ts">
import {loginState} from "@/stats/loginState.js";
import {ref } from "vue";
import particlesConfig from '@/assets/particles.json'

const email = ref('');
const password = ref('');
const loginLoading = ref(false);
const {login, loginError} = loginState();

const attemptLogin = async () => {
    loginLoading.value = true;

    await login({
        email: email.value,
        password: password.value,
    }).catch((e) => {
        loginLoading.value = false;
        console.log('error', e)
    })

}


</script>
