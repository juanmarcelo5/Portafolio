/*Creamos las variables*/
const contenedor=document.querySelector('#card-contenedor');




eventos();
function eventos(){
   contenedor.addEventListener('click',cargarDetalles);
   
}

function cargarDetalles(e){
    e.preventDefault();
    if(e.target.classList.contains('detalles-b')){
       const detalleSeleccionado=e.target.parentElement.parentElement;
       leerDetalles(detalleSeleccionado);
    }else if(e.target.classList.contains('btn-eliminar')){
        const detalleSeleccionado=e.target.parentElement;
        ocultar(detalleSeleccionado);
    }
}

function leerDetalles(detalle){
   const delta={caract:detalle.querySelector('.caracteristicas'),
   }
   delta.caract.style.display="block";
  

   setTimeout(()=>{
    delta.caract.style.display="none";
    
 
   },8000);
   

    //console.log(delta);

}
function ocultar(detalleE){
    detalleE.style.display="none";
    
}
