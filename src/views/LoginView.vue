<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="_absolute _inset-0  _flex _items-center justify-center _px-8 _flex-col _gap-4">
        <div class="_backdrop-blur-xl _bg-gray-600/40 _text-white _rounded-lg _pl-4 _w-full ">
          <ion-input
              :clear-input="true"
              :autofocus="true"
              type="email"
              v-model="email"
              placeholder="Email"
          ></ion-input>
        </div>
        <div class="_backdrop-blur-xl _bg-gray-600/40 _text-white _rounded-lg _pl-4 _w-full ">
          <ion-input
              :clear-input="true"
              :autofocus="true"
              type="password"
              v-model="password"
              placeholder="Password"
          ></ion-input>
        </div>
        <div class="_w-full">

          <ion-button
              expand="block"
              color="primary"
              @click="attemptLogin"
          >
            <p v-if="!loginLoading">Login</p>
            <ion-spinner v-else></ion-spinner>
          </ion-button>
        </div>


      </div>
      <MyParticles/>
    </ion-content>
  </ion-page>

  <!--  <v-app class="!_bg-transparent">-->

  <!--      <div class="_flex _justify-center _items-center _h-screen _flex-col _gap-4">-->
  <!--        &lt;!&ndash; Adjust container to be scrollable if needed &ndash;&gt;-->
  <!--        <v-form @submit.prevent>-->
  <!--        <v-card class="_w-96" :loading="loginLoading" >-->
  <!--          <v-card-title class="_text-center">Login</v-card-title>-->
  <!--          <v-card-text>-->
  <!--            <div class="_py-2">-->
  <!--              <v-alert v-if="loginError" type="error" variant="tonal" density="comfortable">-->
  <!--                {{ loginError }}-->
  <!--              </v-alert>-->
  <!--            </div>-->
  <!--            <v-text-field label="Email" v-model="email" density="comfortable" autofocus variant="solo"></v-text-field>-->
  <!--            <v-text-field label="Password" v-model="password" type="password" density="comfortable" variant="solo"></v-text-field>-->
  <!--            <div>-->
  <!--              <p>-->
  <!--                if you don't have an account, please-->
  <!--                <router-link class="_text-blue-400" :to="{ name: 'register' }">register</router-link>-->
  <!--              </p>-->
  <!--            </div>-->
  <!--          </v-card-text>-->
  <!--          <v-card-actions>-->
  <!--            <v-btn color="primary" icon="fa-thin fa-home" :to="{ name: 'home' }"></v-btn>-->
  <!--            <v-spacer />-->
  <!--            <v-btn color="primary" type="submit" variant="flat" @click="attemptLogin">Login</v-btn>-->
  <!--          </v-card-actions>-->
  <!--        </v-card>-->
  <!--        </v-form>-->
  <!--      </div>-->

  <!--    <MyParticles />-->
  <!--  </v-app>-->
</template>
<script setup lang="ts">
import {loginState} from "@/stats/loginState.js";
import {ref} from "vue";
import MyParticles from '@/components/common/MyParticles.vue'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonButton,
  IonInput,
} from '@ionic/vue';
import {presentToast} from "@/stats/Utils";
import { globe } from 'ionicons/icons';

const email = ref('');
const password = ref('');
const loginLoading = ref(false);
const {login, loginError} = loginState();


const attemptLogin = async () => {
  loginLoading.value = true;
  await login({
    email: email.value,
    password: password.value,
  }).catch(async (e) => {
    loginLoading.value = false;
    await presentToast({
      position: 'top',
      message:loginError.value??'An error occurred',
      icon:globe
    });
    console.log('error', e)
  })
}


</script>
<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>