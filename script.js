
document.querySelector("#nombre").addEventListener("blur",salirNombre);

document.querySelector("#btn-guardar").addEventListener("click",clickGuardar);
document.querySelector("#btn-borrar").addEventListener("click",clickBorrar);

/** Botones que agregan productos  */
document.querySelector('#peperoni').addEventListener("click",clickPepe);
document.querySelector('#carnes').addEventListener("click",clickCarnes);
document.querySelector('#estaciones').addEventListener("click",clickEstaciones);
document.querySelector('#suprema').addEventListener("click",clickSuprema);
document.querySelector('#borde').addEventListener("click",clickBorde);

document.querySelector('#palitos').addEventListener("click",clickPalitos);
document.querySelector('#pan').addEventListener("click",clickPan);
document.querySelector('#alitas').addEventListener("click",clickAlitas);

document.querySelector('#bebida').addEventListener("click",clickBebida);

document.querySelector("#borrar-pedido").addEventListener("click",clickBorrarPedido);
document.querySelector('#comprar').addEventListener('click',clickComprar);



class Pedido{
    constructor(){
        this.nombre="";
        this.direccion="";
        this.pepe=0;
        this.carnes=0;
        this.estaciones=0;
        this.suprema=0;
        this.borde=0;
        this.palitos=0;
        this.pan=0;
        this.alitas=0;
        this.bebida=0;
    }
}

alCargar();
let pedidoActual=new Pedido();

const pedidoAnterior = localStorage.getItem("pedido");
if( pedidoAnterior){
    pedidoActual = JSON.parse(pedidoAnterior);
    console.log("Se recupero un pedido anterior");
    imprimirPedido();
}else{
    console.log("Se usara un pedido nuevo");
}


function clickPepe(){
    pedidoActual.pepe++;
    guardarPedido();
    imprimirPedido();
}
function clickCarnes(){
    pedidoActual.carnes++;
    guardarPedido();
    imprimirPedido();
}
function clickEstaciones(){
    pedidoActual.estaciones++;
    guardarPedido();
    imprimirPedido();
}
function clickSuprema(){
    pedidoActual.suprema++;
    guardarPedido();
    imprimirPedido();
}
function clickBorde(){
    pedidoActual.borde++;
    guardarPedido();
    imprimirPedido();
}function clickPalitos(){
    pedidoActual.palitos++;
    guardarPedido();
    imprimirPedido();
}function clickPan(){
    pedidoActual.pan++;
    guardarPedido();
    imprimirPedido();
}function clickAlitas(){
    pedidoActual.alitas++;
    guardarPedido();
    imprimirPedido();
}function clickBebida(){
    pedidoActual.bebida++;
    guardarPedido();
    imprimirPedido();
}

function clickGuardarPedido(){
    guardarPedido();
}

function guardarPedido(){
    localStorage.setItem('pedido',JSON.stringify(pedidoActual));
}

function clickBorrarPedido(){
    borrarPedido();
}

function clickComprar(){
    borrarPedido();

    //agregar la logica de comprar,luego imprimir boleta por consola
    //Verificar que el pedido tenga prodctos agregados, usuario y direccion
    console.log("Pedido confirmado, recibira su boleta en unos segundos.")
    alert("¡Recibirá su pedido en menos de 30 minutos!");


}

function borrarPedido(){
    localStorage.removeItem('pedido');
    pedidoActual= new Pedido();
    imprimirPedido();
}


function salirNombre(){


}

function alCargar(){
    let stnombre = localStorage.getItem('nombre');
    let stdireccion = localStorage.getItem('direccion');

    const inputnombre = document.getElementById("nombre");
    const inputdireccion = document.getElementById("direccion");


    if(stnombre ){
        inputnombre.value= stnombre;
    }
    if(stdireccion){
        inputdireccion.value = stdireccion;
    }

}



function imprimirPedido(){
    let total=0;
    let imprimirProductos = "";


    if(pedidoActual.pepe){
        imprimirProductos += `${pedidoActual.pepe} Pizzas de Peperoni\n`;
        total += pedidoActual.pepe * 5500; 
    }
    if(pedidoActual.carnes){
        imprimirProductos += `${pedidoActual.carnes} Pizzas de Tres Carnes\n`;
        total += pedidoActual.carnes * 6500; 
    }
    if(pedidoActual.estaciones){
        imprimirProductos += `${pedidoActual.estaciones} Pizzas de Cuatro Estaciones\n`;
        total += pedidoActual.estaciones * 7000; 
    }
    if(pedidoActual.suprema){
        imprimirProductos += `${pedidoActual.suprema} Pizzas Suprema\n`;
        total += pedidoActual.suprema * 9500; 
    }
    if(pedidoActual.borde){
        imprimirProductos += `${pedidoActual.borde} Pizzas con Borde de Queso\n`;
        total += pedidoActual.borde * 11000; 
    }
    if(pedidoActual.palitos){
        imprimirProductos += `${pedidoActual.palitos} Palitos de Ajo\n`;
        total += pedidoActual.palitos * 3500; 
    }
    if(pedidoActual.pan){
        imprimirProductos += `${pedidoActual.pan} Pan de Cuatro Quesos\n`;
        total += pedidoActual.pan * 4500; 
    }
    if(pedidoActual.alitas){
        imprimirProductos += `${pedidoActual.alitas} Alitas de Pollo\n`;
        total += pedidoActual.alitas * 4500; 
    }
    if(pedidoActual.bebida){
        imprimirProductos += `${pedidoActual.bebida} Bebidas\n`;
        total += pedidoActual.bebida * 2500; 
    }


    // if( imprimirProductos === ""){
    //     imprimirProductos= "Agregue un producto.";
    // }

    const parrafo= document.getElementById("mi-pedido");
    const total_a_pagar = document.querySelector("#total-a-pagar");
    parrafo.innerText= imprimirProductos;



    //Actualizar el total en otro div

    if(total > 0){

        total_a_pagar.innerText= "$"+total;

    }else{
        total_a_pagar.innerText= "$0";
    }

    const div_pagar = document.querySelector(".total");    

}



function clickGuardar(){
    let nombre= document.getElementById("nombre").value;
    console.log("Nombre:"+nombre);
    let direccion = document.getElementById("direccion").value;
    console.log("Direccion:"+direccion);

    if( nombre  &&  direccion){
        localStorage.setItem('nombre',nombre);
        localStorage.setItem('direccion',direccion);

    }

}

function clickBorrar(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('direccion');
    document.getElementById("nombre").value="";
    document.getElementById("direccion").value="";
}