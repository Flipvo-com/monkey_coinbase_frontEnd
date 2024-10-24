<template>
    <v-app class="!_bg-transparent">
        <v-main>
            <div class="_flex _justify-center _items-center _h-screen _flex-col _gap-4">
                <router-link :to="{name:'home'}">
                    <v-icon size="100" color="primary">fa-duotone fa-solid fa-monkey</v-icon>
                </router-link>

                <v-card class="_w-96" :loading="loadingProgress" >
                    <v-card-title class="_text-center">Register now </v-card-title>
                    <v-card-text>

                        <div class="_py-2">
<!--                            <v-alert v-if="loginError" type="error" variant="tonal" density="comfortable">-->
<!--                                {{ loginError }}-->
<!--                            </v-alert>-->
                        </div>

                        <v-text-field label="Name" v-model="formDetails.name"
                                      density="comfortable" variant="solo"></v-text-field>
                        <v-text-field label="Email" v-model="formDetails.email"
                                      density="comfortable" variant="solo"></v-text-field>
                        <v-text-field label="Password" v-model="formDetails.password" type="password"
                                      density="comfortable" variant="solo"></v-text-field>
                        <v-text-field label="Confirm Password" v-model="formDetails.password_confirmation" type="password"
                                        density="comfortable" variant="solo"></v-text-field>

                        <div>
                            <p>
                                if you have an account, please <router-link  class="_text-blue-400"
                                                                             :to="{name:'login'}">login</router-link>
                            </p>
                        </div>

                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary"
                              icon="fa-thin fa-home"
                               :to="{name:'home'}"></v-btn>
                        <v-spacer/>
                        <v-btn color="success"  variant="flat"
                               @click="attemptRegister">Register
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-main>
        <MyParticles/>
    </v-app>
</template>
<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";
import {loginState} from "@/stats/loginState";
import particlesConfig from '@/assets/particles.json'
import MyParticles from "@/components/common/MyParticles.vue";

const {login} = loginState();
const loadingProgress = ref(false);
const formDetails = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation : ''

});
const attemptRegister = async () => {
    loadingProgress.value = true;

    await axios.post(import.meta.env.VITE_API_URL + '/register', formDetails.value).then((response) => {
        console.log(response.data);
        login({
            email: formDetails.value.email,
            password: formDetails.value.password,
        }).catch((e) => {
            console.log('error', e)
            loadingProgress.value = false;
        })
    }).catch((e) => {
        console.log('error', e)
        loadingProgress.value = false;
    })

}


</script>
