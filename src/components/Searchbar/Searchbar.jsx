import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({
      input: event.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.input.trim() === '') {
      toast.error('Enter something');
      return;
    }

    this.props.onSubmit(this.state.input);
    this.reset();
  };

  reset = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <BsSearch />

            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
