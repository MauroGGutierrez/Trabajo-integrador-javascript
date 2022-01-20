export function ShowHamburguerMenu() {
  document.getElementById('menuOpen').addEventListener("click", e => {
    const open = document.querySelector('.contenedor-navegacion');
    open.classList.toggle('hamburguer');
  })
}
