var burgerMenu = document.querySelector('.burger__menu');

function toggleBurgerMenu(element) {
    element.classList.toggle('active');
}

// burgerMenu.onclick = function () {
//     toggleBurgerMenu(burgerMenu);
// }

burgerMenu.addEventListener('click', function () {
    toggleBurgerMenu(burgerMenu);
});