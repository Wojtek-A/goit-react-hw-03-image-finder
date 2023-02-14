import { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handelChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handelSubimt = event => {
    event.preventDefault();
    this.props.onSubmitSearch(this.state.searchQuery);
    // this.reset();
  };

  // reset() {
  //   this.setState({ searchQuery: '' });
  // }

  render() {
    console.log(this.state.searchQuery);
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm}>
          <button
            type="submit"
            className={css.searchFormButton}
            onSubmit={this.handelSubimt}
          >
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            onChange={this.handelChange}
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
