const {CarritoCompra} = require("../index");

describe("Clase CarritoCompra", () => {
    
    //Prueba para el constructor
    it("Deberia inicializar como un carrito vacio", ()=> {
        const carrito = new CarritoCompra();
        expect(carrito.productos).toEqual([]);
    });

    // Prueba para agregar Productos
    it("Deberia agregar un producto al carrito", () => {
        const carrito = new CarritoCompra();
        const producto1 = { nombre: "Producto A", price: 10 };

        carrito.agregarProducto(producto1);

        // Esperamos que el producto este en el array
        expect(carrito.productos).toContain(producto1);
        expect(carrito.productos.length).toBe(1);
    });

    // Prueba para calcular el Total
    it("Deberia calcular el total de los productos", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({ nombre: "Producto A", price: 10 });
        carrito.agregarProducto({ nombre: "Producto B", price: 20 });
        carrito.agregarProducto({ nombre: "Producto C", price: 30 });

        expect(carrito.calcularTotal()).toBe(60);
    });

    // Si el carrito esta vacio
    it("Deberia devolver 0 si el carrito esta vacio", () => {
        const carrito = new CarritoCompra();
        expect(carrito.calcularTotal()).toBe(0);
    });

    // Prueba para aplicarDescuento
    it("Deberia aplicar un descuento al total de la compra", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({ nombre: "Producto A", price: 100 });
        carrito.agregarProducto({ nombre: "Producto B", price: 50 });
        // Total = 150

        // Se aplica un 10% de Descuento
        const totalConDescuento = carrito.aplicarDescuento(10);

        //Resultado con el descuento 150 - 15 = 135
        expect(totalConDescuento).toBe(135);
    });

});