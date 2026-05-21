import { Dialog, Page } from '@playwright/test';

export async function dialog_test(page: Page) {

    page.on('dialog', async (dialog: Dialog) => {
    
  switch(dialog.type()) {
    case 'alert':
      console.log('Simple alert:', dialog.message());
      await dialog.accept();
      break;
      
    case 'confirm':
      console.log('Confirmation:', dialog.message());
      await dialog.accept(); // or dialog.dismiss()
      break;
      
    case 'prompt':
      console.log('Prompt:', dialog.message());
      await dialog.accept('user input here');
      break;
  }
})
    
}