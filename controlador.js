
let boton=document.getElementById("boton");


boton.addEventListener("click",capturarDatos);

function capturarDatos(){
    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);

    let direccion=document.getElementById("comentarios").value;
  console.log(direccion);

  let cantidad=document.getElementById("cantidad").value;

  let pildora=document.getElementById("pildora");
  pildora.textContent=cantidad;
  pildora.classList.remove("invisible");
  pildora.classList.add("visible");

  let fotocarrito=document.getElementById("fotocarrito");
  fotocarrito.src=fotosconsola;

  let titulocarrito=document.getElementById("titulocarrito");
  titulocarrito.textContent=nombreConsola;

  

}
let nombreConsola;
let precioConsola;
let pesosConsola;
let fotosconsola

function seleccionarConsola(opcion){

    let consola={
        nombre:Array("nitendo","xbox","playstation"),
        precio:Array(409,700,750),
        pesos:Array(4.75,13.1,14.2),
        fotos:Array("img/nintendo.jpg","img/xbox.jpg","img/Ps5.jpg"),
       
    }
    if(opcion==1){
        nombreConsola=consola.nombre[0];
        precioConsola=consola.precio[0];
        pesosConsola=consola.pesos[0];
        fotosconsola=consola.fotos[0];


    }else if(opcion==2){
        nombreConsola=consola.nombre[1];
        precioConsola=consola.precio[1];
        pesosConsola=consola.pesos[1];
        fotosconsola=consola.fotos[1];

    }else if(opcion==3){
        nombreConsola=consola.nombre[2];
        precioConsola=consola.precio[2];
        pesosConsola=consola.pesos[2];
        fotosconsola=consola.fotos[2];

    }else{

        nombreConsola=null;
        precioConsola=null;
        pesosConsola=null;
        fotosconsola=null;

    }

}
