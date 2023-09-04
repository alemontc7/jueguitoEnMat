import validarCadenaDeComandos from "./auto";
describe("Validar", () => {
  it("deberia validar la cadena de comandos", () => {
    expect(validarCadenaDeComandos("5,5")).toEqual(true);
  });
});

