const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=============================================");
console.log("   BIENVENIDO A LA CALCULADORA DINÁMICA      ");
console.log("=============================================");

rl.question("--> Ingrese el nombre del producto: ", (nombreProducto) => {
    rl.question("--> Ingrese el precio original del producto: ", (precioInput) => {
        rl.question("--> Ingrese el porcentaje de descuento: ", (descuentoInput) => {

            let precioOriginal = Number(precioInput);
            let descuentoPorcentaje = Number(descuentoInput);

            let valorDescuento = precioOriginal * (descuentoPorcentaje / 100);
            let precioFinal = precioOriginal - valorDescuento;

            let esCaro = precioFinal > 100000;

            console.log("\n=============================================");
            console.log("          TICKET DE VENTA GENERADO           ");
            console.log("=============================================");
            console.log("Producto Registrado: " + nombreProducto);
            console.log("Precio Base: $" + precioOriginal.toFixed(2));
            console.log("Descuento del " + descuentoPorcentaje + "%: -$" + valorDescuento.toFixed(2));
            console.log("Precio Final a Pagar: $" + precioFinal.toFixed(2));
            console.log("---------------------------------------------");
            console.log("¿El costo final supera los $100,000?: " + esCaro);
            console.log("---------------------------------------------");

            rl.close();
        });
    });
});