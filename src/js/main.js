let body = document.body;

let menuToggle = document.getElementById('menu-toggle');
let navigation = document.getElementById('navigation');

let main = () => {
    menuToggle.addEventListener('click', toggleMenu);
}

let toggleMenu = () => {
    navigation.classList.toggle('show');
}

main();