const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const TASA_CAMBIO_USD_COP = 4000.00;

console.log("=============================================");
console.log("      CONVERTIDOR DE DOLARES A PESOS         ");
console.log("=============================================");

rl.question("--> Ingrese la cantidad de dinero en Dólares (USD): ", (usdInput) => {

    let dolares = Number(usdInput);

    let pesosColombianos = dolares * TASA_CAMBIO_USD_COP;

    let esMontoAlto = pesosColombianos > 1000000;

    console.log("\n=============================================");
    console.log("          RESUMEN DE LA CONVERSIÓN           ");
    console.log("=============================================");
    console.log("Monto ingresado:          " + dolares.toFixed(2) + " USD");
    console.log("Tasa de cambio usada:     $" + TASA_CAMBIO_USD_COP.toFixed(2) + " COP");
    console.log("---------------------------------------------");
    console.log("Total Equivalente:        $" + pesosColombianos.toFixed(2) + " COP");
    console.log("---------------------------------------------");
    console.log("¿Requiere auditoría por monto alto? (>1M): " + esMontoAlto);
    console.log("=============================================");

    rl.close();
});