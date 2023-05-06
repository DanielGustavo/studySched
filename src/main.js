import './styles/global.scss';

import { createApp } from 'vue';
import VueFeather from 'vue-feather';

import App from './App.vue';

const app = createApp(App);

app.component(VueFeather.name, VueFeather);
app.mount('#app');
