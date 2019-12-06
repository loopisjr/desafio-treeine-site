 function animaScroll(){
    $('nav a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html,body').animate({
            scrollTop:  targetOffset
        }, 1600);
    });
    $('.navbar li ').click(function() {
        $('.navbar li').removeClass('ativada');
        $(this).addClass('ativada'); 
    }); 
 }
 
