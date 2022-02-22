import PropTypes from 'prop-types';
import '../App.css';
const Button = ({ handleLoadMore }) => {
    return (
        <button
            className="load-more"
            type="button"
            onClick={handleLoadMore}
        >Load more</button>
    )
}
Button.propTypes = {
  handleLoadMore:PropTypes.func.isRequired, 
}
export default Button;