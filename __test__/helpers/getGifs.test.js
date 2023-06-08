/* eslint-disable no-undef */
import getGifs from "../../src/helpers/getGifs";


describe('Pruebas en la funcion getGifs()', () => {

    test('Debe devolver un objeto', async () => {
        const gifs = await getGifs("beer")
        // console.log(gifs[0])
        expect(typeof gifs).toEqual("object");
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });

});