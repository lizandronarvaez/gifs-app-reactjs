/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import GifsCards from "../../src/components/GifCards"
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en el componente <GifsCards />', () => {

    const categoria = "Lizandro"

    test('Debe cargar el Spinner primero', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifsCards category={categoria} />)
        expect(screen.getByText(categoria))
        // screen.debug()
    });

    test('Debe mostart las el item cuando se cargar el hook', () => {

        const gif = [
            {
                id: "ABC",
                title: "Goku",
                url: "https://localhost/lizandro.jpg"
            },
            {
                id: "ACD",
                title: "Doraemon",
                url: "https://localhost/lizandro.jpg"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gif,
            isLoading: false
        })

        render(<GifsCards category={categoria} />)

        expect(screen.getAllByRole("img").length).toBe(2)
        // screen.debug()
    });
});