/* Menu hamburguesa */

$(".menu").click(function(){
    //Aparece menú y X
    $("nav").css("width", "70%");
    $("nav span").css("transform", "translate(-50%, 50%)");
    //Aparecen los elementos del menú 0,25segundos después
    setTimeout(function(){
        $("ul").css("transform", "translateX(0%)");
    },250);
});

//Para volver a replegar el menú lateral izquierdo cuando pulso la X:
$("#cerrar").click(function(){
    //Desaparecen los elementos del menú
    $("ul").css("transform", "translateX(-100%)");
    //Desaparecen menú y X 0,25segundos después
    setTimeout(function(){
        $("nav").css("width", "0%");
        $("nav span").css("transform", "translate(-100%, 0%)");
    },250);
});

//Click en btn SERIES y me lleva a series.html

$("#series").click(function(){
    window.location = "series.html";
});
