$(function () {   //Esta es la función general de jquery
    //Todos los métodos de jquery van acá adentro

    //Oculta informacion al hacer click en el titulo de las tarjetas
    $('.card-title').click(function () {
        $('.card-text2').toggle();
    });

    //Tooltips aplicado en la seccion Quienes Somos
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    //cambia el color de fondo del navbar
    $(document).ready(function () {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll > 800) {
                $(".navbar").css("background", "#000");
            }

            else {
                $(".navbar").css("background", "none");
            }
        })
    })
});