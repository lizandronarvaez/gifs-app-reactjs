/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen, renderHook } from "@testing-library/react";
import GifExpertApp from "../../src/components/GifExpertApp"
jest.mock("../../src/components/GifExpertApp");
describe('Pruebas en el componente <GifExpertApp />', () => {

    test('Hacer un snapshot al componente', () => {
        const { container } = render(<GifExpertApp />)

        expect(container).toMatchSnapshot();

        // screen.debug()
    });

    test('El estado inicial de la categoria es un array vacio', () => {

    });

    test('Solo se puede enviar una vez el mismo nombre de categoria', () => {

    });
});