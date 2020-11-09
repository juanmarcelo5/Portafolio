$(document).ready(function(){
   
   //Efecto Menu
    $('.menu a').each(function(index,elemnto){

        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        },1500+(index*500));

    });
    //Efecto Header
    if( $(window).width() >500){

        $('header .textos').css({
            opacity:0,
            margintop:0
        });
        $('header .textos').animate({
            opacity:1,
            margintop:'-59px'
            
        }, 1600);


    }

//scrool elementos menu
var acercaDe=$('#acerca-de').offset().top;
$('#btn-acerca-de').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:acercaDe
    },500);


    })

 var menu=$('#platillo').offset().top;
$('#btn-menu').on('click',function(){

    $('html,body').animate({
        scrollTop:menu
    },1000)

})
var galeria=$('#galeria').offset().top;

$('#btn-galeria').on('click',function(){

    $('html,body').animate({
        scrollTop: galeria
    },1000);

})
})