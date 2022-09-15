class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad) {
      this.nombre = nombre.toUpperCase();
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioVenta;
  }
  
  function agregarProductos() {
    let numeroProductos = parseInt(
      prompt("Por favor confirme la cantidad de productos a comprar:")
    );
    let productos = [];
    for (let index = 0; index < numeroProductos; index++) {
      let nombre = prompt("Por favor ingrese el nombre del producto:");
      let precioCompra = prompt("Por favor ingrese el precio de compra del producto:");
      let precioVenta = prompt("Por favor ingrese el precio de venta del producto:");
      let cantidad = prompt("Por favor ingrese la cantidad de productos:");
      let productoARegistrar = new Producto(
        nombre,
        precioCompra,
        precioVenta,
        cantidad
      );
      productos.push(productoARegistrar);
    }
    return productos;
  }
  

  function mostrarProductos(productos) {
    for (const producto of productos) {
     alert ("Estos fueron los productos seleccionados: \n" + "Nombre: " + producto.nombre + "\nCosto:"  + producto.precioCompra + "\nPrecio: " + producto.precioVenta + "\nCantidad: " + producto.cantidad)
     
    }
  }
  
  function calcularCosto(productos) {
    let sumatoriaCosto = 0;
    for (const producto of productos) {
      sumatoriaCosto += producto.calcularCosto();
    }
    return sumatoriaCosto;
  }
  
  
  function principal() {
    let productos = agregarProductos();
    mostrarProductos(productos)
    let costoCarrito = calcularCosto(productos);
    alert("El costo total del carrito es: $" + costoCarrito);

    inicio
  }
  
  principal();

  