import { newE2EPage } from '@stencil/core/testing';

it('select: single-value', async () => {
  const page = await newE2EPage({
    url: '/src/components/select/test/single-value?ionic:_testing=true'
  });

  let compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();

  const select = await page.find('#gender');
  await select.click();

  const alert = await page.find('ion-alert');
  await alert.waitForVisible();
  await page.waitFor(100);

  compare = await page.compareScreenshot('should open gender single select');
  expect(compare).toMatchScreenshot();
});
