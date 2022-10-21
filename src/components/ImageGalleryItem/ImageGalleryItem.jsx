import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ galleryItem, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={galleryItem.webformatURL}
        alt={galleryItem.tags}
        className={styles.ImageGalleryItemImage}
        onClick={() => onClick(galleryItem.largeImageURL)}
      ></img>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  galleryItem: PropTypes.exact({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
