import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';

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

export default ImageGalleryItem;
