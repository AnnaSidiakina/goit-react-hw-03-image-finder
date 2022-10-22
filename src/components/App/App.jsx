import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreButton from '../Button/Button';
import * as API from '../../services/API';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
    error: null,
    loading: false,
    currentLargeImage: '',
    total: null,
  };

  onModalOpen = largeImageURL => {
    this.setState({ currentLargeImage: largeImageURL });
  };

  onModalClose = () => {
    this.setState({ currentLargeImage: '' });
  };

  formSubmitHandler = query => {
    if (query.trim() === '') {
      toast.error('Please, enter your request');
      return;
    }
    if (query === this.state.query) {
      toast.error('Please, enter something new');
      return;
    }
    this.setState({ query, page: 1, gallery: [] });
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  addImageGallery = async (query, page) => {
    try {
      this.setState({ loading: true });
      const gallery = await (await API.fetchGallery(query, page)).gallery;
      const total = await (await API.fetchGallery(query, page)).total;
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...gallery],
        loading: false,
        total: total,
      }));
      if (gallery.length === 0) {
        toast.error(
          "Sorry, we can't find anyting for your request. Please, enter another request"
        );
      }
    } catch (error) {
      this.setState({ error: 'Something went wrong, please, try again' });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.addImageGallery(this.state.query, this.state.page);
    }
  }

  render() {
    const { gallery, loading, error, currentLargeImage, total, page } =
      this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} loading={loading} />
        {error && <p>{error}</p>}
        {loading && <Loader />}
        {gallery.length > 0 && (
          <ImageGallery galleryItems={gallery} onClick={this.onModalOpen} />
        )}
        <ToastContainer autoClose={3000} />
        {gallery.length > 0 && total / page > 12 && (
          <LoadMoreButton
            onLoadMore={this.onLoadMoreButton}
            isLoading={loading}
          />
        )}
        {currentLargeImage && (
          <Modal
            closeModal={this.onModalClose}
            largeImageURL={currentLargeImage}
          />
        )}
      </div>
    );
  }
}
