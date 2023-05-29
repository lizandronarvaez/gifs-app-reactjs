import { useState } from "react"
import AddCategory from "./AddCategory";
import GifCards from "./GifCards";
import Spinner from "./Spinner/Spinner";
const GifExpertApp = () => {

    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState([]);

    const onAddCategory = (onCategoryNewValue) => {

        // Pasar el array de valores a lowercase
        const categoryExist = categories.map(cat => cat.toLowerCase())
        // Validar que el nombre existe
        if (categoryExist.includes(onCategoryNewValue)) {
            return;
        }
        // FORMAS DE LLAMAR AL STADO
        setCategories([onCategoryNewValue, ...categories])
        // setCategories(category=>[categories, ...category])
    }

    return (
        <>
            <div className="container">
                <h1>Gifs <span>Search</span> App</h1>
                <div className='form-submit'>
                    <AddCategory
                        // setCategories={setCategories}
                        // Con esta forma el hijo le emite un evento al padre
                        onCategoryNewValue={onAddCategory}
                    />
                    {
                        categories.length === 0 ?
                            <Spinner title={"Introduce un nombre para empezar la busqueda"} /> :
                            categories.map(category =>
                            (
                                <GifCards
                                    key={category}
                                    category={category}
                                />
                            )
                            )}
                </div>

            </div>

        </>
    )
}

export default GifExpertApp