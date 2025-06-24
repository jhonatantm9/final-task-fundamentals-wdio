import LoginPage from "./pages/login.page";

const items = {
  login: LoginPage,
};

/**
 *
 * @param name {'login'}
 * @returns
 */
function page(name) {
  return items[name.toLowerCase()];
}

export { page, LoginPage };
