let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;

let linea=document.getElementById("linea");
let linea2=document.getElementById("linea2");
let convertidor=document.getElementById("cop");
let convertidor2=document.getElementById("usd");
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");

convertidor.addEventListener("click",convertidorcop);
convertidor2.addEventListener("click",convertidorUSD);
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);


linea.classList.add("invisible")
linea2.classList.add("invisible")
convertidor.classList.add("invisible")
convertidor2.classList.add("invisible")

function capturarDatos(){


    let consolaElegida=document.getElementById("productos").value;
    seleccionarProducto(consolaElegida);

    let cantidad=document.getElementById("cantidad").value;
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");
    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioConsola} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoConsola} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total del envio: ${pesoConsola*cantidad}Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoConsola,cantidad)} USD`;
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioConsola,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))} USD`;
    
    linea.classList.remove("invisible")
    linea2.classList.remove("invisible")
    convertidor.classList.remove("invisible")
    console.log("click")
}

function seleccionarProducto(opcion){

    let productos={
        nombres:Array("Phone 12","Nintendo Switch","XBOX Serie X","PlayStation5","AirPods generacion 1","AirPods generacion 2","samsung galaxy A10","HUAWEI P40","MAC (computador de mesa)","MAC (portatil)","ipad","pencil apple generacion 2","Tablet HUAWEI","Tablet SAMSUNG","Watch APPLE","XIAOME" ),
        precios:Array(699,409,700,750,35,159,200,1120,780,470,699,409,700,750,35,159),
        pesos:Array(162,4.75,13.1,14.2,38,4,16.8,175,4.48,4.30,162,4.75,13.1,14.2,38,4.48 ),
        fotos:Array("img/phone.jpeg","img/nintendo.jpg","img/xbox.jpg","img/ps5.jpg","img/airpods.jpg","img/airpods2.jpg","img/galaxy a10.jpg","img/huawei p40.jpg","img/mac.jpg","img/mac2.jpg","img/pad.jpg","img/pencil apple g2.jpg","img/tablet huaweit10.jpg","img/tablet samsung.jpg","img/watch.jpg","img/xiaomi.jpg"),
    }

    if(opcion==1){

        nombreConsola=productos.nombres[0];
        precioConsola=productos.precios[0];
        pesoConsola=productos.pesos[0];
        fotoConsola=productos.fotos[0];

    }else if(opcion==2){

        nombreConsola=productos.nombres[1];
        precioConsola=productos.precios[1];
        pesoConsola=productos.pesos[1];
        fotoConsola=productos.fotos[1];

    }else if(opcion==3){

        nombreConsola=productos.nombres[2];
        precioConsola=productos.precios[2];
        pesoConsola=productos.pesos[2];
        fotoConsola=productos.fotos[2];

    }else if(opcion==4){

        nombreConsola=productos.nombres[3];
        precioConsola=productos.precios[3];
        pesoConsola=productos.pesos[3];
        fotoConsola=productos.fotos[3];

    }
    else if(opcion==5){

        nombreConsola=productos.nombres[4];
        precioConsola=productos.precios[4];
        pesoConsola=productos.pesos[4];
        fotoConsola=productos.fotos[4];

    }
    else if(opcion==6){

        nombreConsola=productos.nombres[5];
        precioConsola=productos.precios[5];
        pesoConsola=productos.pesos[5];
        fotoConsola=productos.fotos[5];

    }
    else if(opcion==7){

        nombreConsola=productos.nombres[6];
        precioConsola=productos.precios[6];
        pesoConsola=productos.pesos[6];
        fotoConsola=productos.fotos[6];

    }
    else if(opcion==8){

        nombreConsola=productos.nombres[7];
        precioConsola=productos.precios[7];
        pesoConsola=productos.pesos[7];
        fotoConsola=productos.fotos[7];

    }
    else if(opcion==9){

        nombreConsola=productos.nombres[8];
        precioConsola=productos.precios[8];
        pesoConsola=productos.pesos[8];
        fotoConsola=productos.fotos[8];

    }
    else if(opcion==10){

        nombreConsola=productos.nombres[9];
        precioConsola=productos.precios[9];
        pesoConsola=productos.pesos[9];
        fotoConsola=productos.fotos[9];

    }
    else if(opcion==11){

        nombreConsola=productos.nombres[10];
        precioConsola=productos.precios[10];
        pesoConsola=productos.pesos[10];
        fotoConsola=productos.fotos[10];

    }
    else if(opcion==12){

        nombreConsola=productos.nombres[11];
        precioConsola=productos.precios[11];
        pesoConsola=productos.pesos[11];
        fotoConsola=productos.fotos[11];

    }
    else if(opcion==13){

        nombreConsola=productos.nombres[12];
        precioConsola=productos.precios[12];
        pesoConsola=productos.pesos[12];
        fotoConsola=productos.fotos[12];

    }else if(opcion==14){

        nombreConsola=productos.nombres[13];
        precioConsola=productos.precios[13];
        pesoConsola=productos.pesos[13];
        fotoConsola=productos.fotos[13];

    }else if(opcion==15){

        nombreConsola=productos.nombres[14];
        precioConsola=productos.precios[14];
        pesoConsola=productos.pesos[14];
        fotoConsola=productos.fotos[14];

    }else if(opcion==16){

        nombreConsola=productos.nombres[15];
        precioConsola=productos.precios[15];
        pesoConsola=productos.pesos[15];
        fotoConsola=productos.fotos[15];

    }
    else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;

    }
}




function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ 

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}
function calcularCostoImpuestos(costoConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

} 
function limpiarCarrito(){

    console.log("hiciste clic en limpiar");

    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=tru"

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent="Tu Carrito de Amazon está vacío";

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent="";

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent="";

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=""

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent="";

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent="";

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent="";

    linea.classList.add("invisible")
    linea2.classList.add("invisible")
    pildora.classList.add("invisible");
    pildora.classList.remove("visible");
    convertidor.classList.add("invisible")
    convertidor2.classList.add("invisible")

}

function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}
function convertidorcop(){

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertiraPesos(precioConsola)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularCostoImpuestos(precioConsola,cantidad))}COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad)))} COP`;
    convertidor.classList.add("invisible");
    convertidor2.classList.remove("invisible")
    convertidor2.classList.add("visible");

    
}
function convertidorUSD(){

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${(precioConsola)} USD`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${(calcularCostoCasillero(pesoConsola,cantidad))} UDS`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${(calcularCostoImpuestos(precioConsola,cantidad))}UDS`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${((calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad)))} USD`;

    convertidor.classList.remove("invisible")
    convertidor.classList.add("visible");
    convertidor2.classList.remove("visible")
    convertidor2.classList.add("invisible");

    


}