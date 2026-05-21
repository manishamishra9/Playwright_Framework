import { Dialog, FrameLocator, Page } from '@playwright/test';

export function getFrameLocator(page: Page, selector: string): FrameLocator {
  return page.frameLocator(selector);
}

export async function dialog_test(page: Page): Promise<void> {
  page.on('dialog', async (dialog: Dialog) => {
    switch (dialog.type()) {
      case 'alert':
        console.log('Simple alert:', dialog.message());
        await dialog.accept();
        break;

      case 'confirm':
        console.log('Confirmation:', dialog.message());
        await dialog.accept();
        break;

      case 'prompt':
        console.log('Prompt:', dialog.message());
        await dialog.accept('user input here');
        break;

      default:
        await dialog.dismiss();
        break;
    }
  });
}
