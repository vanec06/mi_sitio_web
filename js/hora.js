// console.log("validacion de fechas");
// console.log("=== fecha y hora GMT===");
// /* greenwich mean time */
// let timeGMT = new Date();
// console.log(timeGMT);
// console.log("Fecha y hora de string");
// let timeGMTStr = timeGMT.toString();
// console.log(timeGMTStr);
// console.log("===obtener el dia de la senama===");
// let timeGMTDay = timeGMT.getDay();
// console.log(timeGMTDay);
// let diasemana = ["Domingo","lunes","martes","miercoles",
//                  "jueves","viernes","sabado"];
// console.log("hoy es: " + diasemana[timeGMTDay]);
// console.log("====obter el mes del año====");
// let timeGMTmonth = timeGMT.getMonth();
// console.log(timeGMTmonth);
// let mesaño = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
// "Agosto","septiembre","Octubre","Nobiembre", "Diciembre"]; 
// console.log ("hoy estamos en el mes de : "+ mesaño[timeGMTmonth]);
//  console.log("fecha y hora desfracmentada");
//  let currentTime = new Date();
//  console.log("dia dela semana:" + currentTime.getDay());
//  console.log("mes del año:" + currentTime.getMonth());
//  console.log("dia del mes:" + currentTime.getDate());
//  console.log("año:" + currentTime.getFullYear());
//  console.log("hora:" + currentTime.getHours());
//  console.log("minutos:" + currentTime.getMinutes());
//  console.log("segundos:" + currentTime.getSeconds());
//  console.log("milisegundos:" + currentTime.getMilliseconds())

//  console.log("---Milisegundos  transcurridos desde el 01/01/1970---");
// console.log(currentTime.getTime());

// console.log("---Estableciendo diferencia en fechas---");
// /*Fecha americano: mes, dia,año */
// let newYear2024 = new Date("January 1, 2024");
// let fechaActual = new Date();
// let newYear2024ms = newYear2024.getTime();
// let fechaActualms = fechaActual.getTime();

// let milisecDiff = newYear2024ms - fechaActualms;
// let diasDiff = milisecDiff / (1000 * 60 * 60 * 24);
// console.log("Dias faltantes para año nuevo: " + diasDiff);
// console.log("Redondear los dias faltantes....");
// console.log(Math.floor(diasDiff));

//  calcularTiempoVotaciones();

//  function calcularTiempoVotaciones(){
//     console.log("ingresar fecha y hora");
//     let fechaHora = new Date("july 2, 2023 08:00:00");
//     let fuchaHorams = fechaHora.getTime();
//     let fechaDifVot = fechaHorams - fechaActualms;
//     let diasRestantes = Math.floor(fechaDifVot / (1000 * 60 * 60 * 24 ));
//     let horasRestantes = Math.floor(fechaDifVot / (1000 * 60 * 60));
//     let horasRestantesSinDecim = Math.floor (horasRestantes % 24);
//     let minutosRestantes = fechaDifVot / (1000 * 60);
//     let minutosRestantesSinDecim = Math.floor(minutosRestantes % 60);
//     console.log("el tiempo restanter para las votaciones es :" + 
//     diasRestantes + "Dias, " + horasRestantesSinDecim + "horas y " + minutosRestantesSinDecim);
//  }

document.getElementById('calcularBtn').addEventListener('click', function() {
  var fecha = new Date(document.getElementById('fecha').value);
  var hora = document.getElementById('hora').value;

  var fechaActual = new Date();

  var horaLimite = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), hora.slice(0, 2), hora.slice(3));

  if (horaLimite < fechaActual) {
    alert('El plazo ya ha vencido. No es posible subir el archivo.');
    return;
  }

  var diferenciaTiempo = horaLimite - fechaActual;

  var dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));

  alert('Tiempo restante:\n\nDías: ' + dias + '\nHoras: ' + horas + '\nMinutos: ' + minutos);
});

  