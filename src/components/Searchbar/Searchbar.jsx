import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    input: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  handleInputChange = event => {
    this.setState({
      input: event.currentTarget.value.toLowerCase(),
    });
  };

  reset = () => {
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    const { onSubmit, loading } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form
          className={styles.SearchForm}
          onSubmit={event => {
            event.preventDefault();
            onSubmit(input);
            this.reset();
          }}
        >
          <button
            type="submit"
            className={styles.SearchFormButton}
            disabled={loading}
          >
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
