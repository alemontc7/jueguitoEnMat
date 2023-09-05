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

  it("deberia retornar O de oeste", () => {
    const auto = new Auto("5,5/1,2N/I");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarComandoIzquierda()).toEqual("O");
  });
  
  it("deberia retornar E de este", () => {
    const auto = new Auto("5,5/1,2S/I");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarComandoIzquierda()).toEqual("E");
  });

  it("deberia retornar E de este", () => {
    const auto = new Auto("5,5/1,2N/D");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarComandoDerecha()).toEqual("E");
  });
  
  it("deberia retornar O de oeste", () => {
    const auto = new Auto("5,5/1,2S/D");
    auto.obtenerFragmentosDeLaCadenaDeComandos();
    auto.obtenerDatosPosicionInicial();
    expect(auto.procesarComandoDerecha()).toEqual("O");
    
  });
});

