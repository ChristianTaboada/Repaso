const sumar = (a,b) => {
    if(typeof a != "number" || typeof b != "number") return null;
    const suma = a + b;
    return suma;
}

const calcularTotal = (items) => {
    if(!items.length) throw Error ("Factura Inválida");

    let total = 0;
    
    for(let item of items) {
        total += item.quantity * item.price
    }
    return total;
}

module.exports = {
    sumar,
    calcularTotal,
};