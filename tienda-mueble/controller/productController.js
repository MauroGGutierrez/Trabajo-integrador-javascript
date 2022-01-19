import { productItems } from "../model/productModel.js";
import { showProducts } from "../view/showProduct.js"

export const getProducts = () => {
  showProducts(productItems);
}