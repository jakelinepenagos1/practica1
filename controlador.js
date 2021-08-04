
let boton=document.getElementById("boton");


boton.addEventListener("click",capturarDatos);

function capturarDatos(){
    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);

  let cantidad=document.getElementById("cantidad").value;

  let pildora=document.getElementById("pildora");
  pildora.textContent=cantidad;

  let direccion=document.getElementById("comentario").value;
  console.log(direccion);

}
let nombreConsola;
let precioConsola;
let pesosConsola;

function seleccionarConsola(opcion){

    let consola={
        nombre:Array("nitendo","xbox","playstation"),
        precio:Array(409,700,750),
        pesos:Array(4.75,13.1,14.2)
    }
    if(opcion==1){
        nombreConsola=consola.nombre[0];
        precioConsola=consola.precio[0];
        pesosConsola=consola.pesos[0];


    }else if(opcion==2){
        nombreConsola=consola.nombre[1];
        precioConsola=consola.precio[1];
        pesosConsola=consola.pesos[1];

    }else if(opcion==3){
        nombreConsola=consola.nombre[2];
        precioConsola=consola.precio[2];
        pesosConsola=consola.pesos[2];

    }else{

        nombreConsola=null;
        precioConsola=null;
        pesosConsola=null;

    }

}
