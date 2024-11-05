import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles";
import canGoToPlugin from './plugins/canGoTo';
import isRole from '@/plugins/roles';
import { IonicVue } from '@ionic/vue';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import './assets/theme/Variables.css'


const app = createApp(App)


app.use(Particles)

app.use(canGoToPlugin)
app.directive('isRole', isRole);
app.use(router)
app.use(IonicVue)
// app.use(vuetify)
app.mount('#app');
// router.isReady().then(() => {
//     app.mount('#app');
// });
