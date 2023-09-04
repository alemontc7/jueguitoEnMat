class Auto {
  constructor(cadenaDeComandos) {
    this.cadenaDeComandos = cadenaDeComandos;
  }

  validarCadenaDeComandos() {
    const regex = /^\d+,\d+$/;
    return regex.test(this.cadenaDeComandos);
  }

  retornarMensajeSobreValidezDeMatriz() {
    if (this.validarCadenaDeComandos()) {
      return "Formato de matriz valido";
    } else {
      return "Formato de matrizinvalido";
    }
  }
}

export default Auto;
