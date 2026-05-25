const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=============================================");
console.log("     SISTEMA DE VALIDACIÓN DE COMPRA         ");
console.log("=============================================");

rl.question("--> Ingrese la edad del comprador: ", (edadInput) => {
    rl.question("--> ¿Tiene fondos suficientes en su cuenta? (si/no): ", (fondosInput) => {
        rl.question("--> ¿Su tarjeta está activa? (si/no): ", (tarjetaInput) => {

            let edad = Number(edadInput);
            let tieneFondos = fondosInput.toLowerCase() === "si";
            let tarjetaActiva = tarjetaInput.toLowerCase() === "si";

            let esMayorDeEdad = edad >= 18;
            let tarjetaApta = tieneFondos && tarjetaActiva;

            let pagoAutorizado = esMayorDeEdad && tarjetaApta;

            console.log("\n=============================================");
            console.log("          RESULTADO DE LA EVALUACIÓN         ");
            console.log("=============================================");
            console.log("¿Es mayor de edad?:        " + esMayorDeEdad);
            console.log("¿La tarjeta es apta?:      " + tarjetaApta);
            console.log("---------------------------------------------");
            console.log("¿TRANSACCIÓN AUTORIZADA?:  " + pagoAutorizado);
            console.log("¿Bloquear usuario por fraude?: " + !esMayorDeEdad);
            console.log("---------------------------------------------");

            rl.close();
        });
    });
});