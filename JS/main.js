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

/*

<canvas id="myCanvas"></canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "30px Verdana";
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "yellow");
gradient.addColorStop("0.255", "magenta");
gradient.addColorStop("0.755", "purple");
ctx.fillStyle = gradient;
ctx.fillText("Instagram", 10, 90);
</script>

*/