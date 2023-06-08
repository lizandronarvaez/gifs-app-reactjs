/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import GifCardItem from "../../src/components/GifCardItem";
describe('Pruebas en el componente <GifCardItem />', () => {
    const title = "Personaje";
    const url = "http://localhost/Personaje-url"

    test('Debe realizar un snapshot', () => {

        const { container } = render(<GifCardItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

        // screen.debug()
    });

    test('Debe mostar la imagen con la URL y el nombre de ALT', () => {

        render(<GifCardItem title={title} url={url} />);
        const { src, alt } = screen.getByRole("img");

        expect(src).toBe(url)
        expect(alt).toBe(title)
        // screen.debug()
    });

});