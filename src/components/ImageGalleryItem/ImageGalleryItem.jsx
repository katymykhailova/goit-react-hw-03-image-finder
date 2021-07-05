import PropTypes from 'prop-types';
import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import defaultImage from 'images/default.jpg';

function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  handleImageClick,
}) {
  return (
    <GalleryItem>
      <ImageGallery
        src={webformatURL}
        alt={tags}
        onClick={() => {
          handleImageClick(largeImageURL, tags);
        }}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.defaultProps = {
  webformatURL: defaultImage,
  largeImageURL: defaultImage,
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  handleImageClick: PropTypes.func,
};

export default ImageGalleryItem;
