import { Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { compareToBaseSnapshot } from '../utils/compareSnapshot';

Then('debug', async () => {
  debugger;
});

Then(
  'Screen matches the base image {string}',
  async function (this: ICustomWorld, name: string) {
    const page = this.page!;
    await page.goto(config.BASE_URL);
    await page.mouse.move(0, 0);
    const screenshot = await this.page!.screenshot();
    await compareToBaseSnapshot(screenshot as Buffer, name, this);
  }
);

Then(
  'Screen matches the base image {string} after {int} seconds',
  async function (this: ICustomWorld, name: string, timeout: number) {
    const page = this.page!;
    await page.goto(config.BASE_URL);
    await page.mouse.move(0, 0);
    await this.page?.waitForTimeout(timeout * 10000);
    const screenshot = await this.page!.screenshot();
    await compareToBaseSnapshot(screenshot as Buffer, `${name}TO`, this);
  }
);
