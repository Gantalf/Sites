//DOM
//let container = document.querySelector('.container'); //seleccionar por selector css. querySelector solo devuelve el primer elemento que encuentra.
//para eso esta querySelectorAll
//let links = document.querySelectorAll('a');


/*
recorrer:
let links = document.querySelectorAll('a');

links.forEach(function(link){
    console.log(link)
})
*/


//Vamos a obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');

//vamos a recorrerlos 
links.forEach(function(link){
    //vamos a agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();

        //Vamos a quitarle las clases de animacion que ya tiene, para eso tenemos que obtenerlo
        let contenido = document.querySelector('.content');

        //se las quitamos
        contenido.classList.remove('animate__jackInTheBox');
        contenido.classList.remove('animate__animated');

        //ahora le vamos a agregar las dos clases de salida que queremos

        contenido.classList.add('animate__fadeOutUp');
        contenido.classList.add('animate__animated');

        setTimeout(function(){
            location.href = '/index.html'
        }, 600);

        return false;
    })
})
