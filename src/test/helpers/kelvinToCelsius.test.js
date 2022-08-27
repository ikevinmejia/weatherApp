import { kelvinToCelsius } from "../../helpers/kelvinToCelsius"

describe('Test in helpers', () => {
    test('kelvinToCelsius debe retornar un tipo numero', () => {
        const entrada = 280;

        const salida = kelvinToCelsius(280);

        expect(salida).toBe(Number)
    })
})