//Creando variables
let individuos = 7;
let cromosomas = 6;
let generaciones = 3;

//Creamos un arreglo de 6 x 7
let poblacion = new Array(individuos);
for (let i = 0; i < individuos; i++) {
  poblacion[i] = new Array(cromosomas);
}
console.log("POBLACION INICIAL");

//Llenando la población aleatoriamente
for (let i = 0; i < individuos; i++) {
  for (let j = 0; j < cromosomas; j++) {
    poblacion[i][j] = Math.round(Math.random());
  }
}

//Función para medir aptitud
function medir_aptitud(poblacion) {
  let aptitud = new Array(individuos);
  let valores = [
    Math.pow(2, 3),
    Math.pow(2, 2),
    Math.pow(2, 1),
    Math.pow(2, 0),
    Math.pow(2, -1),
    Math.pow(2, -2),
  ];
  console.log("");
  console.log("VALORES PARA DETERMINAR APTITUD MUSICAL");
  console.log("Signo: [" + valores + "]");

  //Multiplicando el Vector de Aptitud por el cromosoma ( fila) de cada individuo de la Poblacion.
  let sumAptitud = 0;
  for (let i = 0; i < individuos; i++) {
    for (let j = 0; j < cromosomas; j++) {
      sumAptitud += poblacion[i][j] * valores[j];
    }
    //Cambiando el signo segun valor
    if (poblacion[i][0] === 1) {
      sumAptitud *= -1;
    }
    aptitud[i] = sumAptitud;
    sumAptitud = 0;
  }

  //Imprimiendo valores de aptitud de cada  fila o cromosoma
  console.log("");
  console.log("APTITUD");
  for (let i = 0; i < individuos; i++) {
    console.log(i + " - [" + poblacion[i].join(", ") + "] = " + aptitud[i]);
  }

  //Imprimiendo la Aptitud Total de la Poblacion ( Sumas de las Aptitudes de sus individuos)
  let total_aptitud = 0;
  for (let i = 0; i < individuos; i++) {
    total_aptitud += Math.abs(aptitud[i]);
  }
  console.log("TOTAL APTITUD " + total_aptitud);
  console.log("");
  return aptitud;
}
<

//Función para realizar torneo entre cada par de individuos (elige el individuo con mayor aptitud)
function torneo(indice_individuo1, indice_individuo2) {
  console.log("TORNEO");
  console.log(
    indice_individuo1 +
      " - [" +
      poblacion[indice_individuo1].join(", ") +
      "] = " +
      aptitud[indice_individuo1]
  );
  console.log(
    indice_individuo2 +
      " - [" +
      poblacion[indice_individuo2].join(", ") +
      "] = " +
      aptitud[indice_individuo2]
  );

  if (
    Math.abs(aptitud[indice_individuo1]) > Math.abs(aptitud[indice_individuo2])
  ) {
    indice_ganador = indice_individuo1;
  } else {
    indice_ganador = indice_individuo2;
  }

  console.log("GANADOR");
  console.log(
    indice_ganador +
      " - [" +
      poblacion[indice_ganador].join(", ") +
      "] = " +
      aptitud[indice_ganador]
  );
  console.log("");

  return indice_ganador;
}

//Función de mutación que cambia de 1 a 0 un bit elegido al azar en un individuo
function mutacion(indice_individuo){
  console.log("MUTACION")
  console.log(indice_individuo + " - [" + poblacion[indice_individuo].join(", ") + "]")
  const indice_mutado = Math.floor(Math.random() * (cromosomas - 1))

  if(poblacion[indice_individuo][indice_mutado] == 0){
    poblacion[indice_individuo][indice_mutado] = 1
  } else {
    poblacion[indice_individuo][indice_mutado] = 0
  }
  console.log(indice_individuo + " - [" + poblacion[indice_individuo].join(", ") + "]")
  console.log("")
}