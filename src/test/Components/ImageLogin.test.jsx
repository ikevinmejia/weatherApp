import { render, screen } from "@testing-library/react"
import ImageLogin from "../../Components/ImageLogin"

describe('test in <ImageLogin/>', () => {

    
    test('math to snapshot', () => {
        const {container} = render(<ImageLogin/>)

        expect({container}).toMatchSnapshot()
    })

    test('Deben haber 3 tags', () => {
        render(<ImageLogin/>)

        expect(screen.getByTestId('test-figure')).toBeTruthy()
    })
})