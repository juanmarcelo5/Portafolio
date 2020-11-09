$(document).ready(function(){
    $(window).scroll(function(){
        var windowWidth=$(window).width();
        if(windowWidth> 800){
            var scroll=$(window).scrollTop();//para calcular la posicion de la barra
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 +'%)'

            })	;

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 +'%)'

            })	;

        }
    })

$(window).resize(function(){
    var windowWidth =$(window).width;
    if(windowWidth <400){
        $('acerca-de article').css({
            'transform': 'translate(0px,8px)'
        });
    }
})
    
})