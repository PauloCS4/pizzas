
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
let pedidoActual = new Pedido();

function clickPepe(){
    pedidoActual.pepe++;
    imprimirPedido();
}
function clickCarnes(){
    pedidoActual.carnes++;
    imprimirPedido();
}
function clickEstaciones(){
    pedidoActual.estaciones++;
    imprimirPedido();
}
function clickSuprema(){
    pedidoActual.suprema++;
    imprimirPedido();
}
function clickBorde(){
    pedidoActual.borde++;
    imprimirPedido();
}function clickPalitos(){
    pedidoActual.palitos++;
    imprimirPedido();
}function clickPan(){
    pedidoActual.pan++;
    imprimirPedido();
}function clickAlitas(){
    pedidoActual.alitas++;
    imprimirPedido();
}function clickBebida(){
    pedidoActual.bebida++;
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
        total += pedidoActual.bebida * 3500; 
    }

    imprimirProductos += "---\nTotal: $"+total;


    const parrafo= document.getElementById("mi-pedido");
    parrafo.innerText= imprimirProductos;
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
}