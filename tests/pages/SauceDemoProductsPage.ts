import { click } from '@ActionUtils';
import {
  expectElementToBeHidden,
  expectElementToBeVisible,
} from '@AssertUtils';
import { getLocator } from '@LocatorUtils';

const productsContainer = () => getLocator(`#inventory_container`).nth(0);

export async function verifyProductsPageDisplayed() {
  await expectElementToBeVisible(productsContainer());
}

export async function verifyProductsPageNotDisplayed() {
  await expectElementToBeHidden(productsContainer());
}

export async function addGivenProductToCart(productNo: number) {
  await click(
    getLocator(
      `(//*[@class='inventory_item'])[${productNo}]//*[contains(@id,'add-to-cart')]`,
    ),
  );
}
