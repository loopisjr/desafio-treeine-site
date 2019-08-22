//Função Jquery para animação do scroll da página.
function anima_scroll(){
    $('nav a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html,body').animate({
            scrollTop:  targetOffset
        }, 600);
    });
    $(".mostrar-bt").click(function(){
        $(".icones").fadeToggle("fast");
    });
}