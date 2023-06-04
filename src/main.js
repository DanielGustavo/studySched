import './styles/global.scss';
import './styles/vcalendar.scss';
import './setupVeeValidate';

import { createApp } from 'vue';
import { setupCalendar } from 'v-calendar';
import { createPinia } from 'pinia';
import VueFeather from 'vue-feather';

import App from './App.vue';
import router from './router';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(setupCalendar);

app.component(VueFeather.name, VueFeather);
app.mount('#app');
