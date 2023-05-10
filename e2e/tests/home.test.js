import { expect } from '@playwright/test';

import test from '../test';

test(`
When user click the "add topic" card button
It should be redirected to the page "/topic"
`, async ({ homePage, topicPage, page }) => {
  await homePage.goTo();

  await homePage.addTopicCardButton.click();

  await page.waitForURL(topicPage.url);
  expect(page.url()).toBe(topicPage.url);
});

test(`
When user click the "+" button in menu bar
It should be redirected to the page "/topic"
`, async ({ homePage, topicPage, page }) => {
  await homePage.goTo();

  await homePage.addTopicMenuButton.click();

  await page.waitForURL(topicPage.url);
  expect(page.url()).toBe(topicPage.url);
});
