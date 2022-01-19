export function showMenu(menuItems) {
  const ViewMenu = menuItems.forEach((item) => {
    const itemsA = document.createElement("a");
    itemsA.href = item.link;
    itemsA.innerText = item.name;
    document.getElementById("navegation").appendChild(itemsA);
  });
}
