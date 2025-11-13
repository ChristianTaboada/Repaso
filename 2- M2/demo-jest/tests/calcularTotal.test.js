const { calcularTotal } = require("../index");

describe("La funcion calcularTotal", () => {
    it("Debe calcular el total en una factura con un solo item", () => {
        expect(
            calcularTotal([{ name: "Producto A", price: 10, quantity: 2}])
        ).toBe(20)
    });

    it("Debe calcular el total en una factura con varios items", () => {
        expect(
            calcularTotal([
                { name: "Producto A", price: 10, quantity:2 },
                { name: "Producto B", price: 20, quantity:3 },
                { name: "Producto C", price: 30, quantity:4 },
            ])
        ).toBe(200)
    })

    it("Debe arrojar un error 'Factura Inválida' en caso de recibir un arreglo vacio", () => {
        expect(() => calcularTotal([])).toThrow("Factura Inválida");
    });
});