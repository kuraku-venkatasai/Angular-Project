import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  const WINDOW_WIDTH = 1920;
  const WINDOW_HEIGHT = 1080;

  beforeAll(async () => {
    page = new AppPage();
    browser.manage().window().setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
    await browser.get(browser.baseUrl);
  });

  it('should display welcome message', async () => {
    // await page.navigateTo();
    expect(await page.getTitleText()).toEqual('sai');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
