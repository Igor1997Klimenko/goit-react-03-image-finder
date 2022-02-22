import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
const ImageGallery = ({ images,handleModal }) => {
    return (
        <ul className="gallery">
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    url={webformatURL}
                    largeUrl={largeImageURL}
                    toggleModal={handleModal}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  handleModal: PropTypes.func.isRequired,
};
export default ImageGallery;