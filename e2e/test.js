import { test as base } from '@playwright/test';

import Home from './pages/Home';
import Topic from './pages/Topic';

export default base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new Home(page);
    await use(homePage);
  },
  topicPage: async ({ page }, use) => {
    const topicPage = new Topic(page);
    use(topicPage);
  },
});
