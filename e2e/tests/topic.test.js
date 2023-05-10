import { expect } from '@playwright/test';

import test from '../test';

test(`
Given the user setted the title and date
When use click the button to add topic
It should create the topic
`, async ({ homePage, page, topicPage }) => {
  await homePage.goTo();

  const oldTopics = await homePage.getTopics();

  await homePage.addTopicCardButton.click();
  await page.waitForURL(topicPage.url);

  const title = Math.random().toString();
  await topicPage.createTopic({
    title,
    date: `${new Date().toLocaleDateString()} 00:00`,
  });

  await topicPage.homeMenuButton.click();
  await page.waitForURL(homePage.url);

  const newTopics = await homePage.getTopics();
  expect(newTopics.length).toBe(oldTopics.length + 1);

  const newTopic = newTopics[newTopics.length - 1];
  expect(newTopic).toStrictEqual({
    title,
    subject: '???',
    importance: 'low',
  });
});

test(`
Given the user didn't set the title and date
When use click the button to add topic
It should create the topic
`, async ({ homePage, page, topicPage }) => {
  await homePage.goTo();

  const oldTopics = await homePage.getTopics();

  await homePage.addTopicCardButton.click();
  await page.waitForURL(topicPage.url);

  await topicPage.createTopic();

  await topicPage.homeMenuButton.click();
  await page.waitForURL(homePage.url);

  const newTopics = await homePage.getTopics();
  expect(newTopics.length).toBe(oldTopics.length);
});
