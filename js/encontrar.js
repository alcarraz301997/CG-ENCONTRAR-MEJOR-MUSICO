//Creando variables
let individuos = 7;
let cromosomas = 6;
let generaciones = 3;

//Creamos un arreglo de 6 x 7
let poblacion = new Array(individuos);
for (let i = 0; i < individuos; i++) {
  poblacion[i] = new Array(cromosomas);
}
document.write("POBLACION INICIAL<br>");

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
  document.write("<br>");
  document.write("VALORES PARA DETERMINAR APTITUD MUSICAL<br>");
  document.write("Signo: [" + valores + "]<br>");

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
  document.write("<br>");
  document.write("APTITUD<br>");
  document.write("<br>");
  for (let i = 0; i < individuos; i++) {
    document.write(i + " - [" + poblacion[i].join(", ") + "] = " + aptitud[i] + "<br>");
  }

  //Imprimiendo la Aptitud Total de la Poblacion ( Sumas de las Aptitudes de sus individuos)
  let total_aptitud = 0;
  for (let i = 0; i < individuos; i++) {
    total_aptitud += Math.abs(aptitud[i]);
  }
  document.write("Total Aptitud: " + total_aptitud + "<br>");
  document.write("<br>");
  return aptitud;
}

//Función para realizar torneo entre cada par de individuos (elige el individuo con mayor aptitud)
function torneo(indice_individuo1, indice_individuo2) {
  document.write("TORNEO<br>");
  document.write(
    indice_individuo1 +
      " - [" +
      poblacion[indice_individuo1].join(", ") +
      "] = " +
      aptitud[indice_individuo1] + "<br>"
  );
  document.write(
    indice_individuo2 +
      " - [" +
      poblacion[indice_individuo2].join(", ") +
      "] = " +
      aptitud[indice_individuo2] + "<br><br>"
  );

  if (
    Math.abs(aptitud[indice_individuo1]) > Math.abs(aptitud[indice_individuo2])
  ) {
    indice_ganador = indice_individuo1;
  } else {
    indice_ganador = indice_individuo2;
  }

  document.write("GANADOR<br>");
  document.write(
    indice_ganador +
      " - [" +
      poblacion[indice_ganador].join(", ") +
      "] = " +
      aptitud[indice_ganador] + "<br>"
  );
  document.write("<br>");

  return indice_ganador;
}

//Función de mutación que cambia de 1 a 0 un bit elegido al azar en un individuo
function mutacion(indice_individuo){
  document.write("MUTACION<br>")
  document.write(indice_individuo + " - [" + poblacion[indice_individuo].join(", ") + "]<br>")
  const indice_mutado = Math.floor(Math.random() * (cromosomas - 1))

  if(poblacion[indice_individuo][indice_mutado] == 0){
    poblacion[indice_individuo][indice_mutado] = 1
  } else {
    poblacion[indice_individuo][indice_mutado] = 0
  }
  document.write(indice_individuo + " - [" + poblacion[indice_individuo].join(", ") + "]<br>")
  document.write("<br>")
}

//Función de cruce que intercambia un bit de dos individuos,la posicion del bit se elige al azar
function cruce(indice_individuo1, indice_individuo2){
  document.write("CRUCE<br>")
  document.write(indice_individuo1 + " - [" + poblacion[indice_individuo1].join(", ") + "]<br>")
  document.write(indice_individuo2 + " - [" + poblacion[indice_individuo2].join(", ") + "]<br>")
  let indice_cruce = Math.floor(Math.random() * (cromosomas - 1))
  document.write("Indice de cruce " + indice_cruce + "<br>")
  document.write("Descendencias<br>")
  let descendencia1 = poblacion[indice_individuo1][indice_cruce] + poblacion[indice_individuo2][indice_cruce]
  document.write(descendencia1 + "<br>")
  let descendencia2 = poblacion[indice_individuo2][indice_cruce] + poblacion[indice_individuo1][indice_cruce]
  document.write(descendencia2 + "<br>")
  return descendencia1, descendencia2
}

//Imprime población
function imprime_poblacion(){
  for (let i = 0; i < individuos; i++){
    console.log(i + " - [" + poblacion[i].join(", ") + "]")
    document.write(i + " - [" + poblacion[i].join(", ") + "]<br>")
  }
}