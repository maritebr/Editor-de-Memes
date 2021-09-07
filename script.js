/*-- ♣ MODO CLARO OSCURO ♣ --*/

let modo = 'claro'
const cambiaColor = () => {
    const header = document.getElementById('header')
    const body = document.body
    const aside = document.getElementById('aside')
    const boton = document.getElementById('background-mode')
    if (modo === 'claro'){
        header.classList.remove('light-mode')
        header.classList.add('dark-mode');

        aside.classList.remove('light-mode')
        aside.classList.add('dark-mode');

        body.classList.add('dark-mode');
        modo = 'oscuro'
    }else{
        header.classList.remove('dark-mode')
        header.classList.add('light-mode');

        aside.classList.remove('dark-mode')
        aside.classList.add('light-mode');

        body.classList.remove('dark-mode');
        modo = 'claro'

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

/*-- ♣ ♣ --*/