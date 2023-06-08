/* eslint-disable react/prop-types */
import { useState } from 'react'
import PropTypes from 'prop-types';
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
        <form onSubmit={handleSubmitForm} aria-label='form'>
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

AddCategory.propTypes = {
    onCategoryNewValue: PropTypes.func.isRequired
}

export default AddCategory