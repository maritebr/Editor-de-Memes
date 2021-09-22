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



/*-- ♣ INGRESAR URL ♣ --*/
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

  

/* -- ♣ COLOR FONDO DE IMAGEN ♣ --*/

  document.getElementById("input-color").addEventListener("input",e =>{
    let fondoImagen = document.getElementById("input-color");
    let fondoMeme = document.getElementById("meme-generator");
    fondoMeme.style.backgroundColor= fondoImagen.value;
    
    })
  
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

  image.style.filter = `brightness(${valorBrillo})`+`contrast(${valorContraste}%)`+`opacity(${valorOpacidad})`+`blur(${valorDesenfoque}px)`+`grayscale(${valorGrayscale}%)`+`sepia(${valorSepia}%)`+`hue-rotate(${valorHue}deg)`+`saturate(${valorSaturado}%)`+`invert(${valorNegativo})`
  
}

const reestrablecerFiltros = () => {

  document.getElementById('brightness').value=1
  document.getElementById('opacity').value=1
  document.getElementById('contrast').value=100
  document.getElementById('blur').value=0
  document.getElementById('grayscale').value=0
  document.getElementById('sepia').value=0
  document.getElementById('hue').value=0
  document.getElementById('saturate').value=100
  document.getElementById('invert').value=0

  actualizarFiltros()

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
  


/* PRUEBA DE INPUT TAMAñO FUENTE*/
  $('fontsize').addEventListener('change', sizeFuente)
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

//PRUEBA DE INPUT TAMAñO FUENTE
const sizeFuente = () =>{
  const size = $('fontsize').value
   $('top-text').style.fontSize = `${size}px`
   $('bottom-text').style.fontSize = `${size}px`
   
   
   console.log(size);
}


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


/* -- ♣ Texto de los inputs de color ♣ -- */



document.getElementById("input-color-text").addEventListener("input",e => {
  let inputColorText = document.getElementById("input-color-text");
  let textColorText = document.getElementById("span-color");
  textColorText.textContent= inputColorText.value; 
})


document.getElementById("input-background-text").addEventListener("input",e => {
  let inputColorBackgroungT = document.getElementById("input-background-text");
  let textColorBackgroundT = document.getElementById("span-background");
  textColorBackgroundT.textContent= inputColorBackgroungT.value; 
})

document.getElementById("input-color").addEventListener("input",e => {
  let inputColorBackgroung = document.getElementById("input-color");
  let textColorBackground = document.getElementById("text-span-background");
  textColorBackground.textContent= inputColorBackgroung.value; 
})


/* -- ♣ Contorno de Texto ♣ -- */

document.getElementById("none").addEventListener("click",e =>{    
  let bordeLetraT = document.getElementById("top-text")
  let bordeLetraB = document.getElementById("bottom-text")
  bordeLetraT.style.textShadow=("none")
  bordeLetraB.style.textShadow=("none")
  })

  document.getElementById("light").addEventListener("click",e =>{
    let bordeLetraT = document.getElementById("top-text");
    let bordeLetraB = document.getElementById("bottom-text")
    bordeLetraT.style.textShadow=("2px -2px 1px #fff")
    bordeLetraB.style.textShadow=("2px -2px 1px #fff")
    })

    document.getElementById("dark").addEventListener("click",e =>{
      let bordeLetraT = document.getElementById("top-text");
      let bordeLetraB = document.getElementById("bottom-text")
      bordeLetraT.style.textShadow=("2px -2px 1px #000")
      bordeLetraB.style.textShadow=("2px -2px 1px #000")
      })



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

/* -- ♣ Boton Descarga ♣ -- */

const imagen = document.getElementById("meme-generator")
const boton = document.getElementById("download")

boton.onclick = () => {
    domtoimage.toBlob(imagen).then(function(blob) {
        window.saveAs(blob, "imagen_descargada.jpg");
    });
};


/* -- ♣ Inicializar ♣ --*/



const inicializar=()=>{
  inicializarTexto()
}

window.onload = inicializar;