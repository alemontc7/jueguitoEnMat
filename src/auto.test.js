import Auto from "./auto";
import auto from "./auto";
describe("Validar", () => {
  it("no deberia validar el formato de la matriz", () => {
    const auto = new Auto("5,5///rfewrew");
    expect(auto.validarFormatoMatriz()).toEqual(false);
  });
  it("no deberia validar los slashes", () => {
    const auto = new Auto("5,5///rfewrew");
    expect(auto.validarSlashesEnCadenaDeComandos()).toEqual(false);
  });
  it("deberia validar el formato de la matriz", () => {
    const auto = new Auto("5,5/rfewrew");
    expect(auto.validarFormatoMatriz()).toEqual(false);
  });
  it("deberia validar el formato de los slashes", () => {
    const auto = new Auto("5,5/rfewrew");
    expect(auto.validarFormatoMatriz()).toEqual(false);
  });
  it("deberia validar el formato de la posicion inicial", () => {
    const auto = new Auto("5,5/1,2N");
    expect(auto.validarFormatoPosicionInicial()).toEqual(false);
  });
  it("no deberia validar el formato de la posicion inicial", () => {
    const auto = new Auto("5,5/1,2B");
    expect(auto.validarFormatoPosicionInicial()).toEqual(false);
  });

  it("deberia validar el formato hasta el segundo slash", () => {
    const auto = new Auto("5,5/1,2N/IAISIAIA");
    expect(auto.validarSlashesEnCadenaDeComandos()).toEqual(true);
  });
  it("no deberia validar el formato", () => {
    const auto = new Auto("5,5/1,2B//////ASDASDASDSAD");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    expect(auto.validarSlashesEnCadenaDeComandos()).toEqual(false);
  }); 

  it("no deberia validar el formato de las ordenes", () => {
    const auto = new Auto("5,5/1,2N/IAISIAIA");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    expect(auto.validarCadenaDeOrdenesEnComandos()).toEqual(false);
  });
  it("deberia validar el formato", () => {
    const auto = new Auto("5,5/1,2N/AI");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    expect(auto.validarCadenaDeOrdenesEnComandos()).toEqual(true);
  }); 

  it("deberia retornar O de oeste: 3", () => {
    const auto = new Auto("5,5/1,2N/I");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarOrdenIzquierda()).toEqual(3);
  });
  
  it("deberia retornar E de este: 1", () => {
    const auto = new Auto("5,5/1,2S/I");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarOrdenIzquierda()).toEqual(1);
  });

  it("deberia retornar E de este: 1", () => {
    const auto = new Auto("5,5/1,2N/D");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarOrdenDerecha()).toEqual(1);
  });
  
  it("deberia retornar O de oeste : 3", () => {
    const auto = new Auto("5,5/1,2S/D");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarOrdenDerecha()).toEqual(3);
    
  });
  it("deberia retornar 1,3", () => {
    const auto = new Auto("5,5/1,2N/A");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    const resultado = auto.procesarAvanzar();
    expect({ x: resultado.x, y: resultado.y }).toEqual({ x: 1, y: 3 });
  });
  it("deberia retornar 1,1", () => {
    const auto = new Auto("5,5/1,2S/A");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    const resultado = auto.procesarAvanzar();
    expect({ x: resultado.x, y: resultado.y }).toEqual({ x: 1, y: 1 });
  });
  

});

