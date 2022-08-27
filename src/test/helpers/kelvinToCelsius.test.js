import { kelvinToCelsius } from "../../helpers/kelvinToCelsius"

describe('Test in kelvintoCelsius', () => {
    test('kelvinToCelsius debe retornar un tipo string', () => {
        const entrada = 280;

        const salida = kelvinToCelsius(entrada);

        expect(salida).toEqual(expect.any(String))
    })
})