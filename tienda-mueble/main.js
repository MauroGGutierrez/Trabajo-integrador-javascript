import { getMenu } from "./controller/menuController.js"
import { getProducts } from "./controller/productController.js"
import { ShowHamburguerMenu } from "./view/showHamburguerMenu.js";

function main() {
  getMenu()
  getProducts()
  ShowHamburguerMenu();
}

main()