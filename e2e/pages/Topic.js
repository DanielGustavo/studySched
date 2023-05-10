import PageModel from './PageModel';

export default class Topic extends PageModel {
  constructor(page) {
    super(page, '/topic');

    this.homeMenuButton = page.locator('.menuBar button').nth(1);

    this.titleInput = page
      .locator('//*[@id="app"]/div[1]/form/div/div/input')
      .nth(0);
    this.dateInput = page
      .locator('//*[@id="app"]/div[1]/form/div/label[2]/input')
      .nth(0);

    this.addTopicButton = page
      .locator('//*[@id="app"]/div[1]/form/button')
      .nth(0);
  }

  async createTopic(props = {}) {
    if (props?.title !== undefined) {
      await this.titleInput.fill(props.title);
    }

    if (props?.date !== undefined) {
      await this.dateInput.click();
      await this.dateInput.type(props.date.split(' ')[0], { delay: 0 });
      await this.dateInput.press('ArrowRight');
      await this.dateInput.type(props.date.split(' ')[1], { delay: 0 });
    }

    await this.addTopicButton.click();
  }
}
