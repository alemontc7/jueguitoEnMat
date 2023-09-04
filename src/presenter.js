import Auto from "./auto";


const comandos = document.querySelector("#comandos");
const form = document.querySelector("#mostrar-posicion-final-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comandosUsuario = comandos.value;
  const auto = new Auto(comandosUsuario);
  div.innerHTML = `<p>El tamaño de tu matriz es: ${comandosUsuario}
                   <br> Validez: ${auto.retornarMensajeSobreValidezDeMatriz()}</p>`;

});
