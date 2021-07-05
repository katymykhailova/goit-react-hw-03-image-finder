import { Component } from 'react';

import ImageGallery from 'components/ImageGallery';
import apiService from 'services/apiService';
import Button from 'components/Button';
import Loader from 'components/Loader';

export default class FetchPictures extends Component {
  state = {
    pictures: [],
    error: null,
    page: 1,
    isLoading: false,
  };

  componentDidMount(prevProps, prevState) {
    this.props.getHeightGallery();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    const prevPictures = prevState.pictures;
    const nextPictures = this.state.pictures;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({
        pictures: [],
        page: 1,
        isLoading: true,
      });
      setTimeout(() => {
        this.fetchPictures();
      }, 500);
    }
    if (nextPictures.length > prevPictures.length) {
      this.props.getHeightGallery();
    }
  }

  onLoadMore = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.fetchPictures();
    }, 500);
  };

  async fetchPictures() {
    const { searchQuery } = this.props;
    const { page } = this.state;
    try {
      const pictures = await apiService.ApiService(searchQuery, page);
      if (pictures.length !== 0) {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
          isLoading: false,
        }));
      } else {
        this.setState({
          error: `Нет изображений по ключевому слову ${searchQuery}`,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { pictures, isLoading } = this.state;
    const { handleImageClick } = this.props;

    return (
      <>
        {isLoading && <Loader />}
        <ImageGallery pictures={pictures} handleImageClick={handleImageClick} />
        {pictures.length > 0 && (
          <Button onClick={this.onLoadMore} aria-label="add contact">
            Load more
          </Button>
        )}
      </>
    );
  }
}
