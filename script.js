//elementos input del cliente.
const campo_nombre_cliente = document.querySelector("#nombre-cliente");
const campo_direccion_cliente = document.querySelector("#direccion-cliente");
//botones del cliente.
const btn_guardar_cliente = document.querySelector("#guardar-cliente");
const btn_borrar_cliente = document.querySelector("#borrar-cliente");
//eventos para botones del cliente
btn_guardar_cliente.addEventListener("click",fn_click_guardar_cliente);
btn_borrar_cliente.addEventListener("click",fn_borrar_cliente);

//elementos botones productos
const btn_agregar_pepperoni = document.querySelector("#btn-pepperoni");
const btn_agregar_tres_carnes= document.querySelector("#btn-tres-carnes");
const btn_cuatro_estaciones= document.querySelector("#btn-cuatro-estaciones");
const btn_suprema = document.querySelector("#btn-suprema");
const btn_borde_queso = document.querySelector("#btn-borde-queso");
const btn_palitos  = document.querySelector("#btn-palitos");
const btn_pan_queso = document.querySelector("#btn-pan-queso");
const btn_alitas = document.querySelector("#btn-alitas");
const btn_bebida = document.querySelector("#btn-bebida");
//eventos botones de productos
btn_agregar_pepperoni.addEventListener("click",fn_agregar_pepperoni);
btn_agregar_tres_carnes.addEventListener("click",fn_agregar_tres_carnes);
btn_cuatro_estaciones.addEventListener("click",fn_agregar_cuatro_estaciones);
btn_suprema.addEventListener("click",fn_agregar_suprema);
btn_borde_queso.addEventListener("click",fn_agregar_borde_queso);
btn_palitos.addEventListener("click",fn_agregar_palitos);
btn_pan_queso.addEventListener("click",fn_agregar_pan_queso);
btn_alitas.addEventListener("click",fn_agregar_alitas);
btn_bebida.addEventListener("click",fn_agregar_bebida);
//Elementos para mostrar pedido
const parrafo_detalle_pedido = document.querySelector("#parrafo-detalle-pedido");
const parrafo_monto_a_pagar =document.querySelector("#monto-a-pagar");

const btn_confirmar_compra = document.querySelector("#confirmar-compra");
const btn_limpiar_pedido = document.querySelector("#limpiar-pedido");

btn_confirmar_compra.addEventListener("click",fn_confirmar_compra);
btn_limpiar_pedido.addEventListener('click',fn_limpiar_pedido);



class pedido{
    constructor( cliente, direccion){
        this.cliente = cliente;
        this.direccion = direccion;
        this.monto = 0;
        this.detalle = new detallePedido();
        this.pagado = false;
    }
}

class detallePedido{
    constructor(){
        this.pepperoni = 0;
        this.trescarnes= 0;
        this.cuatroestaciones=0;
        this.suprema=0;
        this.bordequeso=0;
        this.palitosdeajo=0;
        this.pandequeso=0;
        this.alitasbbq=0;
        this.bebida=0;
    }
}

// Inicio
let pedido_actual;
let pedido_anterior = localStorage.getItem("pedidoGuardado");
if( pedido_anterior){
    pedido_actual = JSON.parse(pedido_anterior);
    calcular_monto();
    mostrar_detalle();
    mostrar_cliente();
}else{
    pedido_actual= new pedido();
    
}

function fn_limpiar_pedido(){
    pedido_actual.detalle = new detallePedido();
    calcular_monto();
    mostrar_detalle();
    fn_click_guardar_cliente();

}

function fn_click_guardar_cliente(){
    pedido_actual.cliente = campo_nombre_cliente.value;
    pedido_actual.direccion = campo_direccion_cliente.value;
    localStorage.setItem('pedidoGuardado',JSON.stringify(pedido_actual));

}

function fn_borrar_cliente(){
    localStorage.removeItem('pedidoGuardado');
    pedido_actual= new pedido();
    calcular_monto();
    mostrar_detalle();
    mostrar_cliente();
}

function fn_confirmar_compra(){

}

function fn_agregar_pepperoni(){
    pedido_actual.detalle.pepperoni++;
    calcular_monto();
    mostrar_detalle();

}
function fn_agregar_tres_carnes(){
    pedido_actual.detalle.trescarnes++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_cuatro_estaciones(){
    pedido_actual.detalle.cuatroestaciones++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_suprema(){
    pedido_actual.detalle.suprema++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_borde_queso(){
    pedido_actual.detalle.bordequeso++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_palitos(){
    pedido_actual.detalle.palitosdeajo++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_pan_queso(){
    pedido_actual.detalle.pandequeso++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_alitas(){
    pedido_actual.detalle.alitasbbq++;
    calcular_monto();
    mostrar_detalle();
}

function fn_agregar_bebida(){
    pedido_actual.detalle.bebida++;
    calcular_monto();
    mostrar_detalle();
}

function mostrar_detalle(){
    let cadena_pedidos="";

    let cantidad_pepperoni = pedido_actual.detalle.pepperoni;
    let cantidad_trescarnes = pedido_actual.detalle.trescarnes;
    let cantidad_cuatroestaciones = pedido_actual.detalle.cuatroestaciones;
    let cantidad_suprema = pedido_actual.detalle.suprema;
    let cantidad_bordequeso= pedido_actual.detalle.bordequeso;
    let cantidad_palitos = pedido_actual.detalle.palitosdeajo;
    let cantidad_pandequeso = pedido_actual.detalle.pandequeso;
    let cantidad_alitas = pedido_actual.detalle.alitasbbq;
    let cantidad_bebida = pedido_actual.detalle.bebida;

    if( cantidad_pepperoni){
        cadena_pedidos += "Pizzas de pepperoni: "+cantidad_pepperoni+"<br>";
    }
    if( cantidad_trescarnes){
        cadena_pedidos += "Pizzas de tres carnes: "+cantidad_trescarnes+"<br>";
    }
    if( cantidad_cuatroestaciones){
        cadena_pedidos += "Pizzas cuatro estaciones: "+cantidad_cuatroestaciones+"<br>";
    }
    if( cantidad_suprema){
        cadena_pedidos += "Pizzas supremas: "+cantidad_suprema+"<br>";
    }
    if(cantidad_bordequeso){
        cadena_pedidos += "Pizzas con borde de queso: "+cantidad_bordequeso+"<br>";
    }
    if( cantidad_palitos){
        cadena_pedidos += "Palitos de ajo: "+cantidad_palitos+"<br>";
    }
    if( cantidad_pandequeso){
        cadena_pedidos += "Panes de queso: "+cantidad_pandequeso+"<br>";
    }
    if(cantidad_alitas){
        cadena_pedidos += "Alitas BBQ: "+cantidad_alitas+"<br>";
    }
    if(cantidad_bebida){
        cadena_pedidos += "Bebidas: "+cantidad_bebida+"<br>";
    }

    parrafo_detalle_pedido.innerHTML=cadena_pedidos;
    parrafo_monto_a_pagar.textContent = "$ "+pedido_actual.monto;

}

function mostrar_cliente(){
    campo_nombre_cliente.value= pedido_actual.cliente;
    campo_direccion_cliente.value = pedido_actual.direccion;
}

function calcular_monto(){
    let monto_total = 0;

    monto_total += pedido_actual.detalle.pepperoni * 5500;
    monto_total += pedido_actual.detalle.trescarnes * 6500;
    monto_total += pedido_actual.detalle.cuatroestaciones * 7000;
    monto_total += pedido_actual.detalle.suprema*9500;
    monto_total += pedido_actual.detalle.bordequeso*11000;
    monto_total += pedido_actual.detalle.palitosdeajo*3500;
    monto_total += pedido_actual.detalle.pandequeso*4500;
    monto_total += pedido_actual.detalle.alitasbbq*4500;
    monto_total += pedido_actual.detalle.bebida*2500;
    
    
    pedido_actual.monto= monto_total;
    return monto_total;

}