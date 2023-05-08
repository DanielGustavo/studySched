import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Topic from './views/Topic.vue';
import TopicsBoxes from './views/TopicsBoxes.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/topic/:id', component: Topic },
    { path: '/topic', component: Topic },
    { path: '/topicsBoxes', component: TopicsBoxes },
  ],
});

export default router;
