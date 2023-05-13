import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Topic from './views/Topic.vue';
import TopicsBoxes from './views/TopicsBoxes.vue';
import TopicsBox from './views/TopicsBox.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/topic/:id', component: { ...Topic } },
    { path: '/topicsBox/topic/:id', component: { ...Topic } },
    { path: '/topicsBox/:topicsBoxId/topic/:id', component: { ...Topic } },
    { path: '/topicsBox/:topicsBoxId/topic', component: { ...Topic } },
    { path: '/topic', component: { ...Topic } },
    { path: '/topicsBox/topic', component: { ...Topic } },
    { path: '/topicsBoxes', component: TopicsBoxes },
    { path: '/topicsBox', component: { ...TopicsBox } },
    { path: '/topicsBox/:id', component: { ...TopicsBox } },
  ],
});

export default router;
