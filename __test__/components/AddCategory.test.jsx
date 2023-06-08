/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe('Pruebas en el componente <AddCategory />', () => {

    test('Realizar un snapshot al componente', () => {
        const { container } = render(<AddCategory onCategoryNewValue={() => { }} />)

        expect(container).toMatchSnapshot();
    })

    test('El valor de el input texto debe cambiar', () => {
        // Usamos el componente
        render(<AddCategory onCategoryNewValue={() => { }} />)

        // Usamos el input que queremos probar
        const input = screen.getByRole("textbox")

        // Ejecutamos el evento 
        fireEvent.input(input, { target: { value: "Lizandro" } })

        // Hacemos el test
        expect(input.value).toBe("Lizandro");
        // screen.debug()
    });

    test('Al realizar el submit deber mandar a llamarse a onCategoryNewValue', () => {
        const inputValue = "Lizandro";
        const onCategoryNewValue = jest.fn()

        render(<AddCategory onCategoryNewValue={onCategoryNewValue} />)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form")

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe("");

        // comprobar que la funcion esta siendo llamada
        expect(onCategoryNewValue).toHaveBeenCalled();
        expect(onCategoryNewValue).toHaveBeenCalledTimes(1);
    });

    test('Si el input value esta vacio,no hace la llamada a la funcion', () => {
        const onCategoryNewValue = jest.fn()

        render(<AddCategory onCategoryNewValue={onCategoryNewValue} />)

        const form = screen.getByRole("form")

        // fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        // expect(onCategoryNewValue).toHaveBeenCalled();
        expect(onCategoryNewValue).toHaveBeenCalledTimes(0);
        // expect(onCategoryNewValue).toHaveBeenCalled();
    });
});