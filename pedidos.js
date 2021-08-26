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
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"img/xbox.jpg"
    }
];

let contenedorPadre=document.getElementById("padre");

pedidos.forEach(function(pedido){

 let columna=document.createElement("div");
 columna.classList.add("col");

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


contenedorPadre.appendChild(columna);
columna.appendChild(cuerpo);
cuerpo.appendChild(imagen,body);
cuerpo.appendChild(body);
body.appendChild(titulo);
body.appendChild(parrafo1);
body.appendChild(parrafo2);
body.appendChild(parrafo3);
} )
