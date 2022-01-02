$(function () {   //Esta es la función general de jquery
                  //Todos los métodos de jquery van acá adentro
//Oculta informacion al hacer click en el titulo de las tarjetas
    $('.card-title').click(function () {
        $('.card-text2').toggle();
    });

});