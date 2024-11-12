/*
* Main entry point for the application
*
* @package: MonkeyCoinbase
* @since:   2021-08-27
* @version: 1.0
* @description: Main entry point for the application
* */

import './assets/main.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import {createApp} from 'vue'
import {createVuetify} from 'vuetify'
import Particles from "vue3-particles";
import router from './router'
import {aliases, fa} from 'vuetify/iconsets/fa'
import Vue3Toastify, {type ToastContainerOptions} from 'vue3-toastify';
import {VTreeview} from 'vuetify/labs/VTreeview'
import {VDateInput} from 'vuetify/labs/VDateInput'
import validationRules from "@/plugins/validation/validationRules";
import canGoToPlugin from './plugins/canGoTo';
import isRole from '@/plugins/roles';
import 'vue3-toastify/dist/index.css';
import 'vuetify/styles'
import "@/assets/css/_icons.css"

// Keyboard.setResizeMode({ mode: 'none' });
// Keyboard.setAccessoryBarVisible({ isVisible: false });
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


app.use(Particles)

app.use(validationRules)

app.use(Vue3Toastify, {
	autoClose: 5000, position: 'bottom-right',
} as ToastContainerOptions);

app.use(canGoToPlugin)
app.directive('isRole', isRole);
app.use(router)
app.use(vuetify)
app.mount('#app')
