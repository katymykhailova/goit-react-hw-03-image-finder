import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

function ImageGallery({ pictures, handleImageClick }) {
  return (
    <Gallery id="imageGallery">
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          handleImageClick={handleImageClick}
        ></ImageGalleryItem>
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImageClick: PropTypes.func,
};

export default ImageGallery;
