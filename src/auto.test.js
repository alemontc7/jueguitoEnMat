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
  it("no deberia validar el formato de la posicion inicial", () => {
    const auto = new Auto("5,5/1,2B//////ASDASDASDSAD");
    expect(auto.validarSlashesEnCadenaDeComandos()).toEqual(false);
  }); 

});

