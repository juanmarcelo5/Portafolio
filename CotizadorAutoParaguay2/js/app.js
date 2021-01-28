//variables


const formulario=document.querySelector('#cotizador-autos')


eventos();
function eventos() {
    document.addEventListener('DOMContentLoaded',  cargarYear );
    formulario.addEventListener('submit', cargarDatos);

}
//clases
class Seguro{
  constructor(marca,year,tipo){
    this.marca=marca;
    this.year=year;
    this.tipo=tipo;
  }
  calcularTotal(){
      const base=1000000;
      let total;
//el mas barato es toyota el mas caro es Mercedez

      if(this.marca==='1'){
        total=base+500000;
      }else if (this.marca==='2') {
        total=base+1500000;
      }else if (this.marca==='3') {
        total=base+1000000;
      }

      const diferencia=new Date().getFullYear()-this.year;
      total=total-(diferencia*50000);

      if(this.tipo==='basico'){
        total+=100000;
      }else  if(this.tipo==='completo'){
        total+=500000
      }


      return total;

  }


}
class UI{

    cargarYear(){
      const year=document.querySelector('#year');
      const yearMax=new Date().getFullYear();
      const yearMin=yearMax-10;

        for (var i =yearMax; i > yearMin; i--) {
          const option=document.createElement('option');
          option.value=i;
          option.textContent=i;
          year.appendChild(option);

        }

    }
    mostrarMensaje(mensaje,tipo){
      this.limpiarHTML();
        const resultado=document.querySelector('#resultado');
          const spinner=document.querySelector('#spinner')
        const mensajeParrafo=document.createElement('p');
        mensajeParrafo.textContent=mensaje;
        if(tipo==='error'){
          mensajeParrafo.classList.add('btn','btn-danger','text-center','w-50','py-2')
        }else if(tipo==='exito'){
          mensajeParrafo.classList.add('btn','btn-primary','text-center','w-50','py-2')

          spinner.classList.add('d-block','text-blue')
        }
        resultado.appendChild(mensajeParrafo)
        setTimeout(() => {
          mensajeParrafo.remove();
          spinner.classList.remove('d-block');
        }, 3000);

    }
    mostrarResumen(marca,year,tipo,total){
      this.limpiarHTML();
      //Marca
      let textoMarca;
      switch (marca) {
        case '1':
          textoMarca='Toyota';
          break;
        case '2':
          textoMarca='Mercedez'
          break;
        case '3':
          textoMarca='Kia'
          break;
        default:
        break;

      }


      const resultado=document.querySelector('#resultado');
      const titulo=document.createElement('h4');
      titulo.textContent='Tu resumen';
      titulo.classList.add('font-weight-bold');

      const divResultado=document.createElement('div');
      divResultado.innerHTML=`
      <h5 class=" text-white py-2 bg-primary">Tu Resumen</h5>
      <p class="negrita">Marca:<span class="font-weight-normal  "> ${textoMarca} </span></p>
      <p class="negrita">Año:<span class="font-weight-normal  "> ${year} </span></p>
      <p class="negrita">Tipo:<span class="font-weight-normal  "> ${tipo} </span></p>
      <p class="negrita">Total:<span class="font-weight-normal  "> ${total} gs. </span></p>

`;
      divResultado.classList.add('w-50','mx-auto','border','border-primary');

      resultado.appendChild(divResultado);




    }
    limpiarHTML(){
      const resultado=document.querySelector('#resultado');
      while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
      }
    }
}
//instancias
const ui=new UI();

//metodo que hace que cargue el year
function cargarYear() {
    ui.cargarYear();
}
function cargarDatos(e) {
  e.preventDefault();
  //leer la marca seleccionada
  const marca=document.querySelector('#marca').value;
  //leer el year seleccionada
  const year=document.querySelector('#year').value;
  //leemos los radiobuttoms seleccinados
  const tipo=document.querySelector('input[name="tipo"]:checked').value;
  if (marca==='' || year==='') {
    ui.mostrarMensaje('Todos los campos son obligatorios','error');
    return;
  }
  ui.mostrarMensaje('Estamos cotizando.....','exito')
  const seguro=new Seguro(marca,year,tipo);


  setTimeout(() => {
    ui.mostrarResumen(marca,year,tipo,seguro.calcularTotal());
  }, 3000);



}
