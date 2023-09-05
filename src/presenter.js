import Auto from "./auto";


const comandos = document.querySelector("#comandos");
const form = document.querySelector("#mostrar-posicion-final-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const auto = new Auto(comandos.value);
  auto.obtenerFragmentosDeLaCadenaDeComandos();
  
  const validezFormatoSlashes = auto.retornarMensajesSobreValidezDeSlashes();
  div.innerHTML = `<p> <br> Validez del formato de los slashes: ${validezFormatoSlashes}  `;
  const validezMatriz = auto.retornarMensajeSobreValidezDeMatriz();
  div.innerHTML += `<br> Validez del formato de la matriz:  ${validezMatriz}`
  const tamanioMatriz = auto.obtenerTamanioMatriz();
  div.innerHTML += ` <br> Tamaño de la matriz : ${tamanioMatriz}`;
  const validezFormatoPosicionInicial = auto.retornarMensajeSobreLaValidezDeLaPosicionInicial();
  div.innerHTML += ` <br> Validez del formato de la posicion inicial: ${validezFormatoPosicionInicial} `  
  const datosPosicionInicial = auto.obtenerDatosPosicionInicial();
  div.innerHTML +=  `<br> Datos posicion inicial: ${datosPosicionInicial}`
  const validarPosicionDentroDeLimites = auto.retornarMensajeValidacionDePosicionDentroLimites();
  div.innerHTML += `<br> ${validarPosicionDentroDeLimites}`;
  const validezFormatoOrdenesEnComando = auto.retornarMensajeSobreValidezDeFormatoDeOrdenes();
  div.innerHTML += `<br> ${validezFormatoOrdenesEnComando}`;
  const posicionaFinal = auto.procesarAvanzar();
  div.innerHTML += `<br>Posicion final despues de avanzar es: ${posicionaFinal.x + " "  + posicionaFinal.y}`;
});
