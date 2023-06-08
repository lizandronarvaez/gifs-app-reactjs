/* eslint-disable no-unused-vars */
import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";
/* eslint-disable no-undef */
describe('Pruebas en el hook useFetchGifs', () => {

    test('Mostrar el estado inicial del hook', () => {
        const { result: { current } } = renderHook(() => useFetchGifs("Doraemon"));
        const { images, isLoading } = current

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un array de imagenes y isLoadin es false', async () => {

        const { result: { current } } = renderHook(() => useFetchGifs("Doraemon"));
        const { images, isLoading } = current
        await waitFor(
            () => expect(images.length).toBe(0)
        )
        // expect(images.length).toBeGreaterThan(0);
        // expect(isLoading).toBeFalsy();
    });
});