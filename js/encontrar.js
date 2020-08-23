//Creando variabls
let individuos = 7;
let cromosomas = 6;
let generaciones = 3;

//Creamos un arreglo de 6 x 7
let poblacion = new Array(cromosomas);

for (let i = 0; i < cromosomas; i++) {
  poblacion[i] = new Array(individuos);
}

console.log("POBLACION INICIAL");

//Llenando la población aleatoriamente
for (let i = 0; i < cromosomas; i++) {
  for (let j = 0; j < individuos; j++) {
    poblacion[i][j] = Math.round(Math.random());
  }
}

//Función para medir aptitud
function medir_aptitud(poblacion){
    let aptitud = new Array(individuos);
    let valores = ["Signo", Math.pow(2, 3), Math.pow(2, 2), Math.pow(2, 1), Math.pow(2, 0), Math.pow(2, -1), Math.pow(2, -2)]
    console.log("")
    console.log("VALORES PARA DETERMINAR APTITUD MUSICAL")
    console.log(valores)

    //Multiplicando el Vector de Aptitud por el cromosoma ( fila) de cada individuo de la Poblacion.
    for (let i = 0; i < individuos; i++) {
        for (let j = 0; j < individuos; j++) {
        aptitud[i] += poblacion[i][j] * valores[cromosomas]
        //Cambiando el signo segun valor
        if (poblacion[i][0] == 1){
            aptitud[i] *= -1
        }
    }

    //Imprimiendo valores de aptitud de cada  fila o cromosoma
    console.log("")
    console.log("APTITUD")
    for (let k = 0; k < individuos; k++) {
        console.log(individuo.toString() + " - [" + "")
    }

}