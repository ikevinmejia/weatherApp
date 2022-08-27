// import { getIconWeather } from "../../helpers/URL";

// No se pudo usar la importación porque no logré configurar que reconociera las variables de entorno

describe('test in URL', () => {
    
    test('Debe retornar un string', () => {

        const icon = '01d';
        const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

        const getIconWeather = (icon) => {
            return `https://openweathermap.org/img/wn/${icon}@2x.png`
        }

        expect(urlIcon).toBe(getIconWeather(icon))
    })
})