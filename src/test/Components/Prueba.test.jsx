import { render, screen, fireEvent } from "@testing-library/react"
import Prueba from "../../Components/Prueba"

describe('Test in <Prueba/>', () => {

    const value = 100

    test('match to snapshot', () => {

        const {container} = render(<Prueba initialValue={value}/>)
        expect(container).toMatchSnapshot()
    })

    test('Restar -1 con el botón "Restar"', () => {

        render(<Prueba initialValue={value}/>)

        fireEvent.click(screen.getByText('Restar'))

        expect(screen.getByText('99')).toBeTruthy()
    })

    test('No debe sumar +1 con el botón "Restar"', () => {

        render(<Prueba initialValue={value}/>)

        fireEvent.click(screen.getByText('Restar'))

        expect(screen.getByText('99')).not.toBeFalsy()
    })

    test('Sumar +1 con el botón "Sumar"', () => {

        render(<Prueba initialValue={value}/>)

        fireEvent.click(screen.getByText('Sumar'))

        expect(screen.getByText('101')).toBeTruthy()
    })

    test('No debe restar -1 con el botón "Sumar"', () => {

        render(<Prueba initialValue={value}/>)

        fireEvent.click(screen.getByText('Sumar'))

        expect(screen.getByText('101')).not.toBeFalsy()
    })


})