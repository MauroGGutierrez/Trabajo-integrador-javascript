export function showProducts(productItems) {
  const template = document.getElementById("product-box");
  productItems.forEach((product) => {
    const clone = template.content.cloneNode(true);
    //paso 3 Asignar contenido al clon
    const img = clone.getElementById("photos");
    img.src = product.img;
    const name = clone.getElementById("tittle-product");
    name.innerText = product.name;
    const time = clone.getElementById("description");
    time.innerText = product.description;
    const price = clone.getElementById("price");
    price.innerText = product.price;
    //paso 4 agregar al padre
    const container = document.querySelector("div.listado-productos");
    container.appendChild(clone);
  });
}
