import { getDataAxios } from "../../helpers/CRUD"

describe('test in CRUD async/await', () => {
    test('Debe retornar un dato tipo truthy getDataAxios', async() => {
        const testUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
        const data = await getDataAxios(testUrl)

        expect(data).toBeTruthy()
    })

    test('Debe retornar un objeto en getDataAxios', async() => {
        const testUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
        const data = await getDataAxios(testUrl)

        expect(data).toMatchObject({name: "ditto"})
    })
})