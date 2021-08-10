
const carro = new carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');

cargaEventos();

function cargaEventos(){
    productos.addEventListener('click', (e) => {carro.comprarProducto(e)});
}