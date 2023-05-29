import PropTypes from 'prop-types'

const GifCardItem = ({ title, url }) => {

    return (
        <div className='card'>
            <img className='card-image' src={url} alt="img gif" />
            <p className='card-title'>{title}</p>
        </div>
    )
}

GifCardItem.propTypes = {
    title:PropTypes.string,
    url:PropTypes.string
}

export default GifCardItem