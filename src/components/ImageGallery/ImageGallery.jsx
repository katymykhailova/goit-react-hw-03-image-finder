import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

function ImageGallery({ pictures, handleImageClick }) {
  return (
    <Gallery>
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

export default ImageGallery;
