class Auto {
  constructor(cadena) {
    this.cadenaDeComandos = cadena;
    this.matrizDeMovimiento = " ";
    this.posicionInicial = " ";
    this.indicaciones = " ";
    this.x;
    this.y;
    this.d;
    this.n;
    this.m;
    this.comandosProcesados;
    this.movimientos = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    this.mapaDeDirecciones = { 'N': 0, 'E': 1, 'S': 2, 'O': 3 };
    this.mapaDeValoresDirecciones = { 0: 'N', 1: 'E', 2: 'S', 3: 'O'};
    this.valorDireccion;
  }
  validarSlashesEnCadenaDeComandos() {
    const regex = /^[^\/]*\/[^\/]*\/[^\/]*$/;
    return regex.test(this.cadenaDeComandos);
  }

  obtenerFragmentosDeLaCadenaDeComandos()
  {
    if(this.validarSlashesEnCadenaDeComandos())
    {
      const comandos = this.cadenaDeComandos.split('/');
      this.matrizDeMovimiento = comandos[0];
      this.posicionInicial = comandos[1];
      this.comandosProcesados = comandos[2];
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
    this.n = valor1;
    this.m = valor2;
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
    this.x = numero1;
    this.y = numero2;
    this.d = letra;
    return numero1 + ", " + numero2 + ", " + letra;
  }

  validarPosicionInicialDentroDeLimites() {
      return this.x >= 0 && this.x <= this.n && this.y >= 0 && this.y <= this.m;
  }
  retornarMensajeValidacionDePosicionDentroLimites()
  {
    if(this.validarPosicionInicialDentroDeLimites())
    {
      return "La posicion inicial esta dentro de los limites";
    }
    else
    {
      return "la posicion inicial no esta dentro de los limites";
    }
  }
  validarCadenaDeOrdenesEnComandos() {
    const regex = /^[IAD]+$/; 
    return regex.test(this.comandosProcesados);
  }
  
  retornarMensajeSobreValidezDeFormatoDeOrdenes()
  {
    if(this.validarCadenaDeOrdenesEnComandos())
    {
      return "El formato de la cadena de comandos es correcto";
    }
    else
    {
      return "El formato de la cadena de comandos no es correcto";
    }
  }
  procesarOrdenIzquierda() {
    this.valorDireccion = (this.mapaDeDirecciones[this.d] + 3) % 4;
    return this.valorDireccion;
  }
  procesarOrdenDerecha() {
    this.valorDireccion = (this.mapaDeDirecciones[this.d] + 1) % 4;
    return this.valorDireccion;
  }
  procesarAvanzar() {
    this.direccion = this.mapaDeDirecciones[this.d];
    this.x += this.movimientos[this.direccion][0];
    this.y += this.movimientos[this.direccion][1];
    return { x: this.x, y: this.y };
  }
  

}



export default Auto;
