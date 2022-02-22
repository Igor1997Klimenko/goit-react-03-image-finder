import PropTypes from "prop-types";
const ImageGalleryItem = ({ largeUrl, url, toggleModal }) => {
    return (
        <li className="gallery-item" onClick={() => toggleModal(largeUrl)}>
            <img
                src={url}
                alt=""
                data-source={largeUrl}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    largeUrl: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;