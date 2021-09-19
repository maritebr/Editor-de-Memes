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



/*-- ♣ Ingresar URL ♣ --*/
document.getElementById("input-url").addEventListener("input",e =>{
  let imageInput = document.getElementById("input-url");
  let image = document.getElementById("img-meme");
  image.src = imageInput.value;
  console.log("estamos en url");
  });
  /*const imgMeme = document.getElementById("img-meme")
  const ingresarUrl=document.getElementById("input-url");
  ingresarUrl.oninput= ()=>{
    imgMeme.src=ingresarUrl.value;
    console.log("entro")
  };*/
  
/*-- ♣ FILTROS IMG ♣ --*/
const actualizarFiltros = () =>{
  const image = document.getElementById('img-meme');

  const valorBrillo = document.getElementById('brightness').value;
  const valorOpacidad = document.getElementById('opacity').value;
  const valorContraste = document.getElementById('contrast').value;
  const valorDesenfoque = document.getElementById('blur').value;
  const valorGrayscale = document.getElementById('grayscale').value;
  const valorSepia = document.getElementById('sepia').value;
  const valorHue = document.getElementById('hue').value;
  const valorSaturado = document.getElementById('saturate').value;
  const valorNegativo = document.getElementById('invert').value;

  image.style.filter = `brightness(${valorBrillo})`
  // opacity(${valorOpacidad}) contrast(${valorContraste}) blur(${valorDesenfoque}px) grayscale(${valorGrayscale}%) sepia(${valorSepia}%) saturate(${valorSaturado}%) invert(${valorNegativo})
}


/*-- ♣ Top Text y Bottom Text ♣ --*/

const $ =(id)=> document.getElementById(id)


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



/* -- ♣ Botones Posicion Texto ♣ -- */

const posicionTextoDerT = document.getElementById("top-text")
const posicionTextoDerB = document.getElementById("bottom-text")
const botonAlinearDerecha=document.getElementById("aling-right");
botonAlinearDerecha.onclick= ()=>{
  posicionTextoDerT.style.textAlign = "right";
  posicionTextoDerB.style.textAlign = "right";
 };

const posicionTextoCenT= document.getElementById("top-text")
const posicionTextoCenB= document.getElementById("bottom-text")
const botonAlinearCentro=document.getElementById("aling-center");
botonAlinearCentro.onclick= ()=>{
  posicionTextoCenT.style.textAlign = "center";
  posicionTextoCenB.style.textAlign = "center";
 };

const posicionTextoizT = document.getElementById("top-text")
const posicionTextoizB = document.getElementById("bottom-text")
const botonAlinearIzquierda=document.getElementById("aling-left");
botonAlinearIzquierda.onclick= ()=>{
  posicionTextoizT.style.textAlign = "left";
  posicionTextoizB.style.textAlign = "left";
 };



/* -- ♣ Color Fondo de Texto ♣ --*/


  document.getElementById("input-background-text").addEventListener("input",e =>{
      let textBgInput = document.getElementById("input-background-text");
      let textBgT = document.getElementById("top-text");
      let textBgB = document.getElementById("bottom-text")
      textBgB.style.backgroundColor= textBgInput.value;
      textBgT.style.backgroundColor= textBgInput.value;
      })


      
/* -- ♣ Color de Texto ♣ -- */

document.getElementById("input-color-text").addEventListener("input",e =>{
  let textColorInput = document.getElementById("input-color-text");
  let textColorT = document.getElementById("top-text");
  let textColorB = document.getElementById("bottom-text")
  textColorT.style.color= textColorInput.value;
  textColorB.style.color= textColorInput.value;
  })


/* -- ♣ Fondo Texto Transparente ♣ -- */

function onText(){
  document.getElementById('top-text').style.background="none";
  document.getElementById('bottom-text').style.background="none";
}
function offText(){
  document.getElementById('top-text').style.background="initial";
  document.getElementById('bottom-text').style.background="initial";
}

let checkboxTextBg = document.getElementById('checkbox-background');
checkboxTextBg.addEventListener("change", compruebaTextBg, false);

function compruebaTextBg(){
  if(checkboxTextBg.checked==true){
      onText();
  }else{
     offText();
  }
} 


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



const inicializar=()=>{
  inicializarTexto()
}

window.onload=inicializar