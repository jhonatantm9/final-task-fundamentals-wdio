import InventoryPage from "./inventory.page";
import LoginPage from "./login.page";

const items = {
  login: LoginPage,
  inventory: InventoryPage,
};

/**
 *
 * @param name {'login' | 'inventory'}
 * @returns
 */
function page(name) {
  return items[name.toLowerCase()];
}

export { page, LoginPage, InventoryPage };
