export default class PageModel {
  constructor(page, path = '/') {
    const startsWithBarRegex = /^\//g;

    const validPath = startsWithBarRegex.test(path) ? path : `/${path}`;
    this.host = 'http://127.0.0.1:8080';
    this.url = `${this.host}${validPath}`;

    this.page = page;
  }

  async goTo() {
    await this.page.goto(this.url);
  }
}
