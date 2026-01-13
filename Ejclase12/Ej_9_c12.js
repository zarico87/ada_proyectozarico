
const prompt = require("prompt-sync")();  

//creamos la matriz 4*7
let gastos = [
  [1135, 2500, 900, 1600, 2800, 650, 1100],   // Semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // Semana 2
  [1700, 1150, 1690, 1900, 1770, 500, 2560], // Semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950]   // Semana 4
];

//aqui me piden el total de gastos de la semana 2
let semana = 1; // Semana 2 (recordar que empieza en 0)// iniciamos la variable para el total de la semana
let totalSemana = 0;

for (let dia = 0; dia < gastos[semana].length; dia++) {
  totalSemana += gastos[semana][dia];
}

console.log("Total semana 2:", totalSemana);

//aca se pide los gastos del dia 3
let dia = 2; // Día 3
let totalDia = 0;

for (let semana = 0; semana < gastos.length; semana++) {
  totalDia += gastos[semana][dia];
}

console.log("Total día 3:", totalDia);

//aca se pide el total del mes
let totalMes = 0;

for (let i = 0; i < gastos.length; i++) {
  for (let j = 0; j < gastos[i].length; j++) {
    totalMes += gastos[i][j];
  }
}

console.log("Total del mes:", totalMes);


// aca calculamos la semana con mayor gasto
let mayorSemana = 0;
let semanaMax = 0;

for (let i = 0; i < gastos.length; i++) {
  let sumaSemana = 0;

  for (let j = 0; j < gastos[i].length; j++) {
    sumaSemana += gastos[i][j];
  }

  if (sumaSemana > mayorSemana) {
    mayorSemana = sumaSemana;
    semanaMax = i;
  }
}

console.log("Semana con más gastos:", semanaMax + 1);

// aca calculamos el dia con mayor gasto
let mayorDia = 0;
let diaMax = 0;

for (let j = 0; j < gastos[0].length; j++) {
  let sumaDia = 0;

  for (let i = 0; i < gastos.length; i++) {
    sumaDia += gastos[i][j];
  }

  if (sumaDia > mayorDia) {
    mayorDia = sumaDia;
    diaMax = j;
  }
}

console.log("Día con más gastos:", diaMax + 1);
