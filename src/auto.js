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
    this.valorDireccion = this.mapaDeDirecciones[this.d];
    return numero1 + ", " + numero2 + ", " + letra;
  }

  obtenerCadenaDeOrdenes()
  {
    return this.comandosProcesados;
  }

  validarPosicionDentroDeLimites() {
      return this.x >= 0 && this.x <= this.n && this.y >= 0 && this.y <= this.m;
  }
  retornarMensajeValidacionDePosicionDentroLimites()
  {
    if(this.validarPosicionDentroDeLimites())
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
    this.valorDireccion = (this.valorDireccion + 3) % 4;
    return this.valorDireccion;
  }
  procesarOrdenDerecha() {
    this.valorDireccion = (this.valorDireccion + 1) % 4;
    return this.valorDireccion;
  }
  procesarAvanzar() {
    const movimientoEnX = this.movimientos[this.valorDireccion][0];
    const movimientoEnY = this.movimientos[this.valorDireccion][1];
    const nuevoX = this.x + movimientoEnX;
    const nuevoY = this.y + movimientoEnY;
    if (nuevoX >= 0 && nuevoX <= this.n && nuevoY >= 0 && nuevoY <= this.m) {
      this.x = nuevoX;
      this.y = nuevoY;
    }
    return { x: this.x, y: this.y };

  }
  procesarCadenaDeOrdenesMezcladas()
  {
    for (const i of this.comandosProcesados) {
      if (i === 'D') this.procesarOrdenDerecha();
      if (i === 'I') this.procesarOrdenIzquierda();
      else if (i === 'A') this.procesarAvanzar();
    }
    const direccionFinal = this.mapaDeValoresDirecciones[this.valorDireccion];
    return [this.x, this.y, direccionFinal];
  }
}
export default Auto;
