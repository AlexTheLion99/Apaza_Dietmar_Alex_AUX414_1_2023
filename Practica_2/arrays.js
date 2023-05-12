/* let nombre = 'Harold';
console.log('el nombre es',nombre);

let nombres = ['Harold', 'Luis', 'Daniela', 'Maria', 'Alejandro'];
//console.log('Los estudiantes son: ', nombres);
//console.log('el estudiante :', nombres[1]);
//Alejandro

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}
console.log('el tamaño es',nombres.length);
let nombreLargo = [0];
for (let i = 0; i < nombres.length; i++) { //i=1
        if (nombreLargo.length <= nombres[i].length) { //6 <= 4
            nombreLargo = nombres[i];
        }
}
console.log('El nombre mas largo es: ', nombreLargo);
 */
/* let n = 10;
let a = 0;
let b = 1;
let c = 0;
let fibonacci = [];
fibonacci.push(a);
fibonacci.push(b);
for (let i = 0; i < n-2; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacci.push(c);
}
console.log(fibonacci); */


/* let nombre = 'Luis';
let numero = 5;
let plantas = ['rosas', 'claveles', 'margaritas'];
console.log(plantas.length);
for (let i = 0; i < plantas.length; i++) {
    console.log('la planta: ' + plantas[i]);
    console.log(`la planta : ${plantas[i]} y esta en la posicion Nº ${i}`);
} */

/* let CocaCola = ['3lt', '2lt', '500ml', '300ml'];
let precios = [13, 10, 5, 3];

for (let i = 0; i < CocaCola.length; i++) {
 
    console.log(`El precio de la CocaCola de ${CocaCola[i]} es de ${precios[i]}bs`)   
}
 */

let auto = 'Toyota';
let marcas = [];
/* let arr = [
    '{"marca" :"Nissan"}',
    '{"marca" :"Honda"}',
    '{"marca" :"Toyota"}',
    '{"marca" :"Alfa Romero"}',
    
]; */
let autos = ['Nissan', 'Honda', 'Ford', 'Toyota', 'Alfa Romero'];
marcas.push(autos);
let autoLargo = [0];
for (let i = 0; i < autos.length; i++) { //i=1
        if (autoLargo.length <= autos[i].length) { //6 <= 4
            autoLargo = autos[i];
        }
        
}
/* let series = arr.reduce((acc, cur) => {
    // Interpretar JSON del elemento actual e insertar en acumulador
    acc.push(JSON.parse(cur));
    // Devolver acumulador
    return acc;
}, []); // El acumulador inicia como arreglo vacío
 
console.log(series);*/
console.log('Autos = ',marcas);
console.log(auto);
console.log(autoLargo);


// Recorrer arreglo original, en cada iteración se recibe acumulador y elemento actual
