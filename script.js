window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var fixed = document.getElementById('fixed');

    // Obtener la altura del header
    var headerHeight = header.offsetHeight;

    // Obtener la posición vertical del scroll
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Mostrar u ocultar el menú fijo según el scroll
    if (scrollPosition > headerHeight) {
        fixed.classList.add('show');
    } else {
        fixed.classList.remove('show');
    }
});
