import Auto from "./auto";


const comandos = document.querySelector("#comandos");
const form = document.querySelector("#mostrar-posicion-final-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#texto-validaciones");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const auto = new Auto(comandos.value);
  auto.obtenerFragmentosDeLaCadenaDeComandos();
  
  const validezFormatoSlashes = auto.retornarMensajesSobreValidezDeSlashes();
  
  div.innerHTML = `<p>
                   <br> Validez del formato de los slashes: ${validezFormatoSlashes} 
                   </p>`;
  const validezMatriz = auto.retornarMensajeSobreValidezDeMatriz();
  div2.innerHTML = `<p>  
                    <br> Validez del formato de la matriz:  ${validezMatriz}
                    </p>`;
});
