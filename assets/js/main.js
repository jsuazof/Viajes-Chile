$(function () {   //Esta es la función general de jquery
    //Todos los métodos de jquery van acá adentro

    //Oculta informacion al hacer click en el titulo de las tarjetas
    $('.card-title').click(function () {
        $('.card-text2').toggle();
    });

    Tooltips aplicado en la seccion Quienes Somos
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});