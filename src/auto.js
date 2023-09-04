class Auto {
  constructor(cadena) {
    this.cadenaDeComandos = cadena;
    this.matrizDeMovimiento = " ";
    this.posicionInicial = " ";
    this.indicaciones = " ";
  }


  validarSlashesEnCadenaDeComandos() {
    const regex = /^[^\/]*\/[^\/]*$/;
    return regex.test(this.cadenaDeComandos);
  }

  obtenerFragmentosDeLaCadenaDeComandos()
  {
    if(this.validarSlashesEnCadenaDeComandos())
    {
      const comandos = this.cadenaDeComandos.split('/');
      this.matrizDeMovimiento = comandos[0];
      this.posicionInicial = comandos[1];
    }
    
  }
  validarFormatoMatriz() {
    const regex = /^\d+,\d+$/;
    return regex.test(this.matrizDeMovimiento);
  }
  obtenerTamanioMatriz()
  {
    const regex = /^(\d+),(\d+)$/;
    const matches = this.matrizDeMovimiento.match(regex);
    const valor1 = parseInt(matches[1], 10);
    const valor2 = parseInt(matches[2], 10);
    return valor1 + ", " + valor2;
  }

  retornarMensajeSobreValidezDeMatriz() {
    if (this.validarFormatoMatriz()) {
      return "Formato de matriz valido";
    } else {
      return "Formato de matriz invalido";
    }
  }
  retornarMensajesSobreValidezDeSlashes()
  {
    if(this.validarSlashesEnCadenaDeComandos()) 
    {
      return "Formato de slashes valido";
    }
    else
    {
      return "Formato de slashes no valido"
    }
  }
  validarFormatoPosicionInicial()
  {
    const regex = /^\d,\d+[NnOoSsEe]$/;
    return regex.test(this.posicionInicial);
  }
  retornarMensajeSobreLaValidezDeLaPosicionInicial()
  {
    if(this.validarFormatoPosicionInicial())
    {
      return "Formato posicion inicial correcto";
    }
    else
    {
      return "Formato posicion inicial incorrecto";
    }
  }
  obtenerDatosPosicionInicial() {
    const regex = /^(\d),(\d+)([NOSE])$/;
    const matches = this.posicionInicial.match(regex);

    const numero1 = parseInt(matches[1], 10);
    const numero2 = parseInt(matches[2], 10);
    const letra = matches[3];
    return numero1 + ", " + numero2 + ", " + letra;
  }
  
}


export default Auto;
