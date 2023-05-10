import PageModel from './PageModel';

export default class Home extends PageModel {
  constructor(page) {
    super(page, '/');

    this.addTopicCardButton = page
      .locator('.view section')
      .nth(0)
      .locator('ul li button')
      .nth(0);
    this.addTopicMenuButton = page.locator('.menuBar button').nth(2);

    this.topicsElements = page.locator('.view section ul li button.topic');
  }

  async getTopics() {
    const topicsElements = (await this.topicsElements.all()).filter(
      (_, i) => i > 0
    );

    const promises = topicsElements.map(async (element) => {
      const title = await element.locator('header p').innerText();
      const subject = await element.locator('span').innerText();

      const className = await element.locator('span').getAttribute('class');

      const importance = className
        .split(' ')
        .filter((classSingleName) =>
          ['low', 'medium', 'high'].includes(classSingleName)
        )
        .join()
        .toLowerCase();

      return {
        title,
        subject,
        importance,
      };
    });

    return Promise.all(promises);
  }
}
