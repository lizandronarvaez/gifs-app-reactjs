/* eslint-disable react/prop-types */
import { useState } from 'react'

const AddCategory = ({ onCategoryNewValue }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = ({ target }) => {
        const { value } = target;
        setInputValue(value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // Pasar el valor quitandole los espacios y pasarlo a minuscula
        const inputValueClean = inputValue.trim().toLowerCase();
        if (inputValueClean.length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onCategoryNewValue(inputValueClean)
        setInputValue("");
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <input
                type="text"
                name="buscador"
                placeholder='Buscar Gifs'
                value={inputValue}
                // Si solo se envie una propieda a una funcion
                // no hace falta enviar automanteicamente
                // react entiende que se pasa solo una prop
                onChange={handleInputValue}
            />
            <button type="submit">Buscar Gifs</button>
        </form>

    )
}

export default AddCategory