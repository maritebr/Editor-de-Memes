/*-- ♣ MODO CLARO OSCURO ♣ --*/

let modo = 'claro'
const cambiaColor = () => {
    const header = document.getElementById('header')
    const body = document.body
    const aside = document.getElementById('aside')
    const boton = document.getElementById('background-mode')
    if (modo === 'oscuro'){
        header.classList.remove('light-mode')
        header.classList.add('dark-mode');

        aside.classList.remove('light-mode')
        aside.classList.add('dark-mode');

        body.classList.add('dark-mode');
        modo = 'claro'
    }else{
        header.classList.remove('dark-mode')
        header.classList.add('light-mode');

        aside.classList.remove('dark-mode')
        aside.classList.add('light-mode');

        body.classList.remove('dark-mode');
        modo = 'oscuro'

    }
    boton.textContent = 'Modo ' + modo
}

/*-- ♣ REEMPLAZO ASIDES ♣ --*/

  let muestraAside1=()=>{
  document.getElementById('text-editor').style.display="block";
  document.getElementById('img-editor').style.display="none";
};

let muestraAside2=()=>{
  document.getElementById('text-editor').style.display="none";
  document.getElementById('img-editor').style.display="block";
};

/*-- ♣ Top Text y Bottom Text ♣ --*/

const $=(id)=> document.getElementById(id)


const actualizarTextos=()=>{
  $('top-text').textContent=$('top-text-input').value
  $('bottom-text').textContent=$('bottom-text-input').value
}

const inicializarTexto=()=>{
  $('top-text-input').addEventListener('input', actualizarTextos)
  $('bottom-text-input').addEventListener('input', actualizarTextos)
  $('select-fonts').addEventListener('change', actualizarFuente)
  
/* PRUEBA DE INPUT TAMAñO FUENTE
  $('fontsize').addEventListener('change', tamañoFuente)*/
}
/*-- ♣ Selector de Fuentes ♣ --*/
const actualizarFuente = () =>{
  const fuentes = $('select-fonts').value 

   $('top-text').style.fontFamily = fuentes
   $('bottom-text').style.fontFamily = fuentes
   console.log("fuentes");
}

/* PRUEBA DE INPUT TAMAñO FUENTE
const tamañoFuente = () =>{
  const tamañoFuente = $('fontsize').value

   $('top-text').style.fontSize = tamañoFuente
   $('bottom-text').style.fontSize = tamañoFuente
   console.log("tamaño de fuente");

}*/
const inicializar=()=>{
  inicializarTexto()
}

window.onload=inicializar


/*-- ♣ Checkbox de texto superior e inferior ♣ --*/

function on(){
  document.getElementById('top-text').style.display="none";
  console.log("Hemos pulsado en on");
}
function onI(){
  document.getElementById('bottom-text').style.display="none";
  console.log("Hemos pulsado en on");
}

function off(){
  document.getElementById('top-text').style.display="initial";
  console.log("Hemos pulsado en off");
}
function offI(){
  document.getElementById('bottom-text').style.display="initial";
  console.log("Hemos pulsado en off");
}

let checkboxSuperior = document.getElementById('checkbox-top');
checkboxSuperior.addEventListener("change", comprueba, false);

let checkboxInferior = document.getElementById('checkbox-bottom');
checkboxInferior.addEventListener("change", compruebaI, false);

function comprueba(){
  if(checkboxSuperior.checked==true){
      on();
  }else{
     off();
  }
}
function compruebaI(){
  if(checkboxInferior.checked==true){
      onI();
  }else{
     offI();
  }
}