import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

import 'vuetify/styles'
import "@/assets/css/_icons.css"
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, fa} from 'vuetify/iconsets/fa'

import VueParticles from "@tsparticles/vue3";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import Vue3Toastify, {type ToastContainerOptions} from 'vue3-toastify';
import {VTreeview} from 'vuetify/labs/VTreeview'
import {VDateInput} from 'vuetify/labs/VDateInput'
import 'vue3-toastify/dist/index.css';
import validationRules from "@/plugins/validation/validationRules";
import canGoToPlugin from './plugins/canGoTo';
import isRole from '@/plugins/roles';


// const VITE_APP_PUSHER_APP_KEY = import.meta.env.VITE_APP_PUSHER_APP_KEY
// const VITE_APP_PUSHER_APP_CLUSTER = import.meta.env.VITE_APP_PUSHER_APP_CLUSTER


const vuetify = createVuetify({
    components: {
        VTreeview, VDateInput, ...components,
    }, directives, icons: {
        defaultSet: 'fa', aliases, sets: {
            fa,
        },
    },
    theme: {
        defaultTheme: 'dark',
    },
})
const app = createApp(App)

// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher', key: VITE_APP_PUSHER_APP_KEY, cluster: VITE_APP_PUSHER_APP_CLUSTER, forceTLS: true,
// });


console.log(VueParticles)
console.log(loadSlim)

app.use(VueParticles, {
    init: async engine => {
        // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
});

app.use(validationRules)

app.use(Vue3Toastify, {
    autoClose: 5000, position: 'bottom-right',
} as ToastContainerOptions);
app.use(canGoToPlugin)
app.directive('isRole', isRole);
app.use(router)
app.use(vuetify)
app.mount('#app')
