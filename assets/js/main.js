(function () {
    let navbar = document.querySelector('#navbar');
    let hamburguesa = document.querySelector('#hamburger');
    hamburguesa.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()