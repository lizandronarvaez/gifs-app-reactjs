import PropTypes from 'prop-types'

const GifCardItem = ({ title, url }) => {

    return (
        <div className='card'>
            <img className='card-image' src={url} alt={title} />
            <p className='card-title'>{title}</p>
        </div>
    )
}

GifCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifCardItem