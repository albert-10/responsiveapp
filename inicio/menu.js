
/*
Al cargar la ventana asigna la funcion cambiarTamano a mediaQuery. La cual se ejcutara cuando el 
tamano de la ventana supere o disminuya los 460px horizontalmente. Tambien se asigna una funcion
manejadora del evento click en el elemento acordeon
*/

function iniciar(){
    const mediaQuery = window.matchMedia('(min-width: 460px)');
    mediaQuery.addEventListener('change', cambiarTamano);
    var acordeon = document.getElementById('acordeon');
    acordeon.addEventListener('click', clickAcordeon)
}

/*
La siguiente funcion realiza funciones en dependencia de si redimenciona la ventana horizontalmente a
ser mayor a 460px o menor. 
*/

function cambiarTamano(event){    
    if(event.matches){
        mostrarOcultarOpcionAcordeon(false);
        mostrarMenuHorizontal();
    }
    else{
        mostrarOcultarOpcionAcordeon(true);
        mostrarMenuVertical();
    }
}

// Permite mostrar u ocultar el div #acordeon

function mostrarOcultarOpcionAcordeon(mostrarAcordeon){
    var acordeon = document.getElementById('acordeon'); 
    if(mostrarAcordeon){
        acordeon.style.display = 'flex';
    }
    else{
        acordeon.style.display = 'none';
    }    
}

// Permite mostrar el menu de navegacion de forma vertical

function mostrarMenuVertical(){
    var menuNavegacion = document.getElementById('menuNavegacion');
    menuNavegacion.style.display = 'block';    
}

// Permite mostrar el menu de navegacion de forma vertical

function mostrarMenuHorizontal(){
    var menuNavegacion = document.getElementById('menuNavegacion');
    menuNavegacion.style.display = 'flex';   
} 

function clickAcordeon(){
    toogleMenu();
    cambiarTextoDeAcordeon();
}

// La siguiente funcion permite mostrar u ocultan el menu de navegacion

function toogleMenu() {
    const menuNavegacion = document.getElementById('menuNavegacion');
    displayMenuNavegacion  = window.getComputedStyle(menuNavegacion).getPropertyValue("display");   
    if (displayMenuNavegacion === 'block') {
        menuNavegacion.style.display = 'none';
    }
    else{
        menuNavegacion.style.display = 'block';
    }       
}

// La siguiente funcion permite cambiar el texto del elemento #acordeon

function cambiarTextoDeAcordeon() {
    var acordeon = document.getElementById('acordeon');
    textoAcordeon = acordeon.innerText;
    if(textoAcordeon === 'Ocultar'){
        acordeon.innerText = 'Mostrar';
    }
    else{
        acordeon.innerText = 'Ocultar';
    }
}

window.addEventListener('load', iniciar);
