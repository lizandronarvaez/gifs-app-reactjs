import PropTypes from 'prop-types'
import './Spinner.css'
const Spinner = ({ title }) => {
    return (
        <>
            <div className="spinner" aria-label='Spinner'>
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
            <p>{title}</p>
        </>
    )
}

Spinner.propTypes = {
    title: PropTypes.string
}

export default Spinner
