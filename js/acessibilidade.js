$(document).ready(function () {
    $("#altoContraste").click(function () {
        $('.corprincipal').css("background-color", "black");
        $('.hoverMenu').css("background-color", "black");
        $('.contrastePreto').css({ "background-color": "black", "color": "white" });
        $('#nomeContraste').removeClass('bg-secondary');
        $('.paragrafoPreto').removeClass('bg-secondary');
        $('.paragrafoPreto').css("background-color", "black");
        $('#nomeContraste').addClass('contrastePreto');
        $('.btn-outline-success').addClass("btn-outline-dark");
        $('.btnContraste').addClass('btn-dark');
    });
    $("#fonteMais").click(function () {
        var elemento = $('.fonte');
        var tamanhoDaFonte = elemento.css('font-size');
        if (parseInt(tamanhoDaFonte) == 30) {
            elemento.css('font-size', '30px');
        }else{
            elemento.css('font-size',parseInt(tamanhoDaFonte) + 2);
        }
    });
    $("#fonteMenos").click(function () {
        var elemento = $('.fonte');
        var tamanhoDaFonte = elemento.css('font-size');
        if (parseInt(tamanhoDaFonte) <= 16) {
            elemento.css('font-size', '16px');
        }
        else{
            elemento.css('font-size',parseInt(tamanhoDaFonte) - 2);
        }
    });
    $("#restaurar").click(function () {
        $('.corprincipal').css("background-color", "#800080");
        $('.hoverMenu').css("background-color", "");
        $(".fonte").css("font-size", "16px");
        $('#nomeContraste').addClass('bg-secondary');
        $('.contrastePreto').css({ "background-color": "", "color": "" });
        $('.btn-outline-success').removeClass("btn-outline-dark");
        $('.paragrafoPreto').addClass('bg-secondary');
        $('.btnContraste').removeClass('btn-dark');
    });
});