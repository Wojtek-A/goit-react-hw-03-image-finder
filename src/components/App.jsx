import React from 'react';
import css from './App.module.css';
import { imagesWithQuery } from '../Api/Api';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoaderSpinner } from './Loader/Loader.jsx';
export class App extends React.PureComponent {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: '',
  };

  componentDidMount() {
    if (this.state.searchQuery < 0) {
      this.handleImagesRequest();
    }
  }

  handleImagesRequest = async searchQuery => {
    this.setState({ isLoading: true });

    try {
      const images = await imagesWithQuery(searchQuery);
      this.setState({ images: images });
      console.log(this.state.images);
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // handleInput = evt => {
  //   this.setState({
  //     searchQuery: evt.target.value,
  //   });
  // };
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.handleImagesRequest(this.state.searchQuery);
      console.log(this.state.searchQuery);
    }
  }

  render() {
    const { images, isLoading, error, searchQuery } = this.state;
    console.log(searchQuery);
    return (
      <div className={css.app}>
        {/* <input type="text" value={searchQuery} onChange={this.handleInput} /> */}
        <SearchBar onSubmitSearch={this.handleImagesRequest} />
        {isLoading && <LoaderSpinner />}
        {error && !isLoading && <div> {error}</div>}
        {!isLoading && images.length > 0 ? (
          <ImageGallery images={images} />
        ) : null}
      </div>
    );
  }
}
