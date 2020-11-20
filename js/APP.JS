const animado=document.querySelectorAll(".animado");
const spinner=document.querySelector('#spinner');
const principal=document.querySelector('#principal');
const holder=document.querySelector('#holder');
const btnacercaDe=document.querySelector('#about');
const habilidades=document.querySelector('#skill');
const proyectos=document.querySelector('#proyect');
const contacto=document.querySelector('#contact');


Evento();

function Evento(){
    document.addEventListener('DOMContentLoaded',mostrarBody);
    btnacercaDe.addEventListener('click',acerca);
    habilidades.addEventListener('click',skill);
    proyectos.addEventListener('click',proyecto);
    contacto.addEventListener('click',contac);

}


    function mostrarScroll(){
        const scrolTop=document.documentElement.scrollTop;//cantidad de scrooll
        for(var i=0; i<animado.length;i++){
            let alturaAnimado=animado[i].offsetTop;
            console.log(alturaAnimado[i]);
                if(alturaAnimado-500<scrolTop){
                    animado[i].style.opacity=1;
                    animado[i].classList.add("mostrarArriba");
                }


        }

}

window.addEventListener('scroll',mostrarScroll);

//Se muestra el documento
function mostrarBody(){
    setTimeout(()=>{
        holder.remove();

    },2000)    ;
   
}

function acerca( e){
    e.preventDefault()
 
   acercaDe=$('#acerca').offset().top-100;
    
    
    
    $('html, body').animate({
        scrollTop:acercaDe
        
    },1000);
}


function skill( e){
    e.preventDefault()
 
   acercaDe=$('#skills').offset().top-50;
    
    
    
    $('html, body').animate({
        scrollTop:acercaDe
        
    },1000);
}
function proyecto( e){
    e.preventDefault()
 
   acercaDe=$('#proyects').offset().top-50;
    
    
    
    $('html, body').animate({
        scrollTop:acercaDe
        
    },2000);
}

function contac( e){
    e.preventDefault()
 
   acercaDe=$('#contacto').offset().top-50;
    
    
    
    $('html, body').animate({
        scrollTop:acercaDe
        
    },2000);
}

