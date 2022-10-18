import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    input: '',

    loading: false,
  };
  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=29502904-bb8b76f5b0eb667a79f07b05e&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(imageGallery => this.setState({ imageGallery }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  formSubmitHandler = searchName => {
    console.log(searchName);
    this.setState({ input: searchName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery searchName={this.state.input} />
        <ToastContainer autoClose={3000} />
        {/* <div>
          {this.state.loading && <p>loading...</p>}
          <ul>
            {this.state.imageGallery &&
              this.state.imageGallery.hits.map(hit => (
                <li key={hit.id}>
                  <img src={hit.webformatURL}></img>
                </li>
              ))}
          </ul>
        </div> */}
      </div>
    );
  }
}
