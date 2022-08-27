import Home from "../../Components/Home"
import {render} from '@testing-library/react'

test('match to snapshot', () => {
    const {container} = render(<Home/>)

    // Al testear funciones o componentes que usen variables de entorno ocurre el siguiente error:
    // import.meta.env.VITE
    // SyntaxError: Cannot use 'import.meta' outside a module

    expect(container).toMatchSnapshot()
})