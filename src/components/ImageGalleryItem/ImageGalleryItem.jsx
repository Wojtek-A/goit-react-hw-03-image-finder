import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = props => {
  const images = props.images;
  return (
    <>
      {images.map(({ id, previewURL, tags }) => (
        <li key={id} className={css.imageGalleryItem}>
          <img
            clasName={css.imageGalleryItemImage}
            src={previewURL}
            alt={tags}
          />
        </li>
      ))}
    </>
  );
};
