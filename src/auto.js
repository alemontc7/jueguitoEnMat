class Auto {
  constructor(cadenaDeComandos) {
    this.cadenaDeComandos = cadenaDeComandos;
  }

  validarTamanioMatriz() {
    const regex = /^\d+,\d+$/;
    return regex.test(this.cadenaDeComandos);
  }

  retornarMensajeSobreValidezDeMatriz() {
    if (this.validarTamanioMatriz()) {
      return "Formato de matriz valido";
    } else {
      return "Formato de matriz invalido";
    }
  }

  
}

export default Auto;
