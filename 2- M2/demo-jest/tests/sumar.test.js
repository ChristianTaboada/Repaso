const {sumar} = require("../index");

const mockSumar = jest.fn(sumar);

describe("La funcion 'sumar'", () => {
    it("Debe retornar null si es ejecutada con algun valor no numérico como argumento", () => {
        expect(mockSumar(1,true)).toBe(null);
        expect(mockSumar(false, 10)).toBe(null);
        expect(mockSumar("hola", "chau")).toBe(null);
    });
    
it("Debe retornar correctamente el resultado de la suma", () => {
    expect(mockSumar(10, 15)).toBe(25);
    expect(mockSumar(0, 0)).toBe(0);
    expect(mockSumar(-8, 8)).toBe(0);
    expect(mockSumar(-20, -30)).toBe(-50);
});

it("Debe haber registrado correctamente los argumentos 10 y 15", () => {
    expect(mockSumar).toHaveBeenCalledWith(10, 15);
});
});

