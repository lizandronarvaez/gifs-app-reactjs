import PropTypes from 'prop-types'
import GifCardItem from './GifCardItem';
import useFetchGifs from '../hooks/useFetchGifs';
import Spinner from './Spinner/Spinner';

const GifCards = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <div className='gifs-card'>
                <h3>Nombre Gif: <span>{category}</span></h3>
                {
                    isLoading && (<Spinner />)
                }
                <div className='gifs-card_grid'>
                    {images.map((gif) => (
                        <GifCardItem
                            key={gif.id}
                            {...gif}
                        />
                    ))}
                </div>

            </div>

        </>
    )
}

GifCards.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifCards