import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Topic from './views/Topic.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/topic', component: Topic },
  ],
});

export default router;
