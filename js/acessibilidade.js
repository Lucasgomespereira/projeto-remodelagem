$(document).ready(function(){
    $("#altoContraste").click(function(){
        $('.corprincipal').css("background-color","black");
        $('.hoverMenu').css("background-color","black");
        $('.contrastePreto').css({"background-color":"black","color":"white"});
        $('#nomeContraste').removeClass('bg-secondary');
        $('#nomeContraste').addClass('contrastePreto');
        $('.btn-outline-success').addClass("btn-outline-dark");
    });
    $("#fonteMais").click(function(){
    });
    $("#fonteMenos").click(function(){
    });
    $("#restaurar").click(function(){
        $('.corprincipal').css("background-color","darkmagenta");
        $('.hoverMenu').css("background-color","darkmagenta");
        $(".fonte").css("font-size","16px");
        $('#nomeContraste').addClass('bg-secondary');
        $('.contrastePreto').addClass('bg-secondary');
        $('.btn-outline-success').removeClass("btn-outline-dark");
    });
});