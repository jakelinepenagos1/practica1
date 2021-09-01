
let pedidos=[

    {
        id:1,
        nombre:"PS5",
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"img/ps5.jpg"
    },

    
    {
        id:2,
        nombre:"xbox",
        precio:700,
        peso:13.1,
        cantidad:1,
        foto:"img/xbox.jpg"
    },
    {
        id:4,
        nombre:"Nintendo Switch",
        precio:409,
        peso:4.75,
        cantidad:3,
        foto:"img/nintendo.jpg"
    },
    {
        id:5,
        nombre:"AirPods generacion 1",
        precio:35,
        peso:38,
        cantidad:2,
        foto:"img/airpods.jpg"
    },


    {
        id:7,
        nombre:"HUAWEI P40",
        precio:780,
        peso:4.48,
        cantidad:6,
        foto:"img/huawei p40.jpg"
    },

    
    {
        id:8,
        nombre:"MAC (computador de mesa)",
        precio:750,
        peso:14.5,
        cantidad:1,
        foto:"img/mac.jpg"
    },
    {
        id:9,
        nombre:"MAC (portatil)",
        precio:750,
        peso:14.5,
        cantidad:8,
        foto:"img/mac2.jpg"
    },
    
    {
        id:6,
        nombre:"AirPods generacion 2",
        precio:750,
        peso:14.5,
        cantidad:3,
        foto:"img/airpods2.jpg"
    },

    {
        id:11,
        nombre:"pencil apple generacion 2",
        precio:750,
        peso:14.5,
        cantidad:10,
        foto:"img/pencil apple g2.jpg"
    },

    
    {
        id:12,
        nombre:"Tablet HUAWEI",
        precio:750,
        peso:14.5,
        cantidad:5,
        foto:"img/tablet huaweit10.jpg"
    },
    {
        id:13,
        nombre:"Tablet SAMSUNG",
        precio:750,
        peso:14.5,
        cantidad:6,
        foto:"img/ps5.jpg"
    },

    {
        id:15,
        nombre:"XIAOME",
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"img/xiaomi.jpg"
    },

    
    {
        id:16,
        nombre:"xbox",
        precio:700,
        peso:13.1,
        cantidad:5,
        foto:"img/xbox.jpg"
    }
];

let contenedorPadre=document.getElementById("padre");

pedidos.forEach(function(pedido){

 let columna=document.createElement("div");
 columna.classList.add("col");
 columna.classList.add("p-4");

 let cuerpo=document.createElement("div");
 cuerpo.classList.add("card");
 cuerpo.classList.add("h-100");
 
 let imagen=document.createElement("img");
 imagen.classList.add("card-img-top");
 imagen.src=pedido.foto;

 let body=document.createElement("div");
 body.classList.add("card-body")

 let titulo=document.createElement("h5");
 titulo.classList.add("card-title");
 titulo.textContent=`nombre del producto: ${pedido.nombre}`;
 let parrafo1=document.createElement("p");
 parrafo1.classList.add("card-text");
 parrafo1.textContent=`precio: ${pedido.precio}`;

 let parrafo2=document.createElement("p");
 parrafo2.classList.add("card-text");
 parrafo2.textContent=`cantidad comprada: ${pedido.cantidad}`; 
 
 let parrafo3=document.createElement("p");
 parrafo3.classList.add("card-text");
 parrafo3.textContent=`peso: ${pedido.peso}`;  

 let boton1=document.createElement("button");
 boton1.classList.add("btn-outline-dark");
 boton1.classList.add("col-md-5");

 let boton2=document.createElement("button");
 boton2.classList.add("btn-outline-dark");
 boton2.classList.add("col-md-5");
 boton2.classList.add("ms-2");

 let icono1=document.createElement("i");
 icono1.classList.add("fa-trash-alt");
 icono1.classList.add("fas");

 let icono2=document.createElement("i");
 icono2.classList.add("fa-pencil-alt");
 icono2.classList.add("fas");

contenedorPadre.appendChild(columna);
columna.appendChild(cuerpo);
cuerpo.appendChild(imagen,body);
cuerpo.appendChild(body);
body.appendChild(titulo);
body.appendChild(parrafo1);
body.appendChild(parrafo2);
body.appendChild(parrafo3);
body.appendChild(boton1);
body.appendChild(boton2);
boton1.appendChild(icono1);
boton2.appendChild(icono2);


} )
