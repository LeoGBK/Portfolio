(function () {
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let alturaNavbar = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - alturaNavbar;
    let isFixed = false;

    let windowPos;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();

        console.log(windowPos, breakpoint);

        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = 'marging-top: ' + alturaNavbar + "px;";
            isFixed = true;

        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = 'marging-top: ' + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()