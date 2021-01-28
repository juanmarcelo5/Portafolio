const formulario=document.querySelector('#formTask')
const task=document.querySelector('#tasks')


let Tareas=[]



eventos()
function eventos(){
    formulario.addEventListener('submit',guardarFormulario)
    document.addEventListener('DOMContentLoaded',()=>{
        Tareas=JSON.parse(localStorage.getItem('task'));
      
        mostrarHTML();
    })
}



function guardarFormulario(e){
    e.preventDefault();
    const titulo=document.querySelector('#title').value;
    const descripcion=document.querySelector('#descripcion').value;
    const horaInput=document.querySelector('#hora').value;
    const horaMaquina=validarHora();

    if(titulo ==='' || descripcion ==='' ){
        validarForm('error','Todos los campos son obligatorios');
        return;
    }else if(horaInput=== horaMaquina){
        validarForm('error','La hora de la tarea tiene que ser distinto');
        return;
    }
    validarForm('correcto','Agregado')

    const objTask={
        id:Date.now(),
        titulo,
        descripcion,
        horaInput
    }
    Tareas=[...Tareas,objTask];
    console.log(Tareas);
    mostrarHTML();
    formulario.reset();
    
}
function validarHora() {
    const datos=new Date();
    let horas="";
    let minutos="";
    let horaCorrecta='';
   
    if(datos.getHours()>9 &&  datos.getMinutes()>9){
         horaCorrecta=datos.getHours()+':'+datos.getMinutes();
    }else{
        if(datos.getHours()<=9){
         horaCorrecta='0'+datos.getHours()+':'+datos.getMinutes();
        }else if(datos.getMinutes()<=9){
            horaCorrecta=datos.getHours()+':'+'0'+datos.getMinutes();

        }
    }

    return horaCorrecta;
    






}
function validarForm(tipo,mensaje) {
    const mensajeParrafo=document.createElement('p');
    mensajeParrafo.textContent=mensaje;
    const boton=document.querySelector('#boton');

    if(tipo==='error'){
        mensajeParrafo.classList.add('bg-danger','text-white','text-center','rounded')
    }else if(tipo==='correcto'){
        mensajeParrafo.classList.add('bg-success','text-white','text-center','rounded')

    }
    formulario.insertBefore(mensajeParrafo,boton)
    setTimeout(() => {
        mensajeParrafo.remove()
    }, 3000);

}

function mostrarHTML() {
    limpiarHTML();

    Tareas.forEach(tarea =>{
        const {id,titulo,descripcion,horaInput}=tarea;
        const lista=document.createElement('p');
        const boton=document.createElement('button');
        boton.classList.add('btn','btn-outline-success','btn-sm','pt-1');
        boton.textContent='Terminar Task';
        boton.onclick=()=>{
            eliminar(tarea.id);}
        lista.classList.add('mb-3');
        lista.innerHTML+=`<span class="oscuro" >Tarea:</span> ${titulo} 
                                                <span class="oscuro "><br> 
                                                Descripcion:</span> ${descripcion} 
                                                <br><span class="oscuro">
                                                Hora:</span> ${horaInput} <br>`;
        lista.appendChild(boton)   ;                                     
        task.appendChild(lista);
    })
    sincronizarStorage();
}
function limpiarHTML() {
    while(task.firstChild){
        task.removeChild(task.firstChild)
    }
}

function sincronizarStorage() {
    localStorage.setItem('task',JSON.stringify(Tareas));
    
}
function eliminar(id) {
   Tareas=Tareas.filter(tarea=> tarea.id !==id);
   mostrarHTML();
    
}
//localStorage.setItem('eL NOMBRE','EL OBJETO A ALMACENAR')
//Para convertir el objeto a String JSON.StringF(El objeto)
//de string a cdena se usa JSON.PARSE(LOCAL.STORAGE.GETITMEN())