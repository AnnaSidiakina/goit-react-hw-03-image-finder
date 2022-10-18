import { Component } from 'react';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    imageGallery: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      console.log('ggg');

      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=29502904-bb8b76f5b0eb667a79f07b05e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => this.setState({ imageGallery: data.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { imageGallery, loading } = this.state;
    const { searchName } = this.props;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {!searchName && <div>Enter Something</div>}
        {imageGallery && <ul className={styles.ImageGallery}>{searchName}</ul>}
      </div>
    );
  }
}
export default ImageGallery;
